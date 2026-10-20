const { PrismaClient } = require('@prisma/client');
const { orderValidation } = require('../utils/validation');

const prisma = new PrismaClient();

/**
 * Create new order
 * @route POST /api/orders
 */
const createOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { items, shippingAddress } = req.body;

    // Validate input
    const { error } = orderValidation.create.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Start transaction
    const order = await prisma.$transaction(async (tx) => {
      // Calculate total and check inventory
      let totalAmount = 0;
      const orderItems = [];

      for (const item of items) {
        const product = await tx.product.findUnique({
          where: { id: item.productId }
        });

        if (!product) {
          throw new Error(`Product ${item.productId} not found`);
        }

        if (product.stock < item.quantity) {
          throw new Error(`Insufficient stock for product ${product.name}`);
        }

        const itemTotal = parseFloat(product.price) * item.quantity;
        totalAmount += itemTotal;

        // Create order item
        orderItems.push({
          productId: item.productId,
          quantity: item.quantity,
          price: product.price
        });

        // Update stock
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } }
        });
      }

      // Create order
      const newOrder = await tx.order.create({
        data: {
          userId,
          totalAmount,
          shippingAddress,
          status: 'PENDING',
          orderItems: {
            create: orderItems
          }
        },
        include: {
          orderItems: {
            include: {
              product: true
            }
          }
        }
      });

      return newOrder;
    });

    // Clear cart
    await prisma.cartItem.deleteMany({
      where: {
        cart: { userId }
      }
    });

    res.status(201).json({
      message: 'Order created successfully',
      order
    });
  } catch (error) {
    console.error('Create order error:', error);
    if (error.message.includes('not found') || error.message.includes('Insufficient stock')) {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Get user orders
 * @route GET /api/orders
 */
const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { status, page = 1, limit = 10 } = req.query;

    const skip = (page - 1) * limit;
    const where = {
      userId,
      ...(status && { status })
    };

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          orderItems: {
            include: {
              product: true
            }
          },
          payments: true
        }
      }),
      prisma.order.count({ where })
    ]);

    res.json({
      orders,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get user orders error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Get order by ID
 * @route GET /api/orders/:id
 */
const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const order = await prisma.order.findFirst({
      where: {
        id,
        ...(req.user.role !== 'ADMIN' && { userId })
      },
      include: {
        orderItems: {
          include: {
            product: true
          }
        },
        payments: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Update order status (Admin/Staff only)
 * @route PUT /api/orders/:id/status
 */
const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (req.user.role === 'CUSTOMER') {
      return res.status(403).json({ error: 'Access denied' });
    }

    const order = await prisma.order.update({
      where: { id },
      data: { status },
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      }
    });

    // Send notification
    // TODO: Implement notification service

    res.json({
      message: 'Order status updated successfully',
      order
    });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

/**
 * Cancel order
 * @route POST /api/orders/:id/cancel
 */
const cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const order = await prisma.order.findFirst({
      where: { id, userId },
      include: { orderItems: true }
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    if (order.status !== 'PENDING' && order.status !== 'CONFIRMED') {
      return res.status(400).json({ error: 'Cannot cancel order in current status' });
    }

    // Restore stock
    await prisma.$transaction(async (tx) => {
      for (const item of order.orderItems) {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { increment: item.quantity } }
        });
      }

      await tx.order.update({
        where: { id },
        data: { status: 'CANCELLED' }
      });
    });

    res.json({ message: 'Order cancelled successfully' });
  } catch (error) {
    console.error('Cancel order error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  cancelOrder
};
