const request = require('supertest');
const app = require('../src/index');

describe('Product API', () => {
  let authToken;

  beforeAll(async () => {
    // Login as admin to get token
    const res = await request(app)
      .post('/api/users/login')
      .send({
        email: 'admin@example.com',
        password: 'admin123'
      });
    authToken = res.body.token;
  });

  describe('GET /api/products', () => {
    it('should get all products', async () => {
      const res = await request(app)
        .get('/api/products');

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('products');
      expect(res.body).toHaveProperty('pagination');
    });

    it('should filter products by category', async () => {
      const res = await request(app)
        .get('/api/products?category=Electronics');

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('products');
    });

    it('should search products by name', async () => {
      const res = await request(app)
        .get('/api/products?search=laptop');

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('products');
    });
  });

  describe('GET /api/products/:id', () => {
    it('should get product by ID', async () => {
      const res = await request(app)
        .get('/api/products/some-product-id');

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('name');
    });

    it('should return 404 for non-existent product', async () => {
      const res = await request(app)
        .get('/api/products/non-existent-id');

      expect(res.statusCode).toBe(404);
    });
  });

  describe('POST /api/products', () => {
    it('should create product with admin token', async () => {
      const res = await request(app)
        .post('/api/products')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          name: 'Test Product',
          description: 'Test description',
          price: 99.99,
          stock: 10,
          category: 'Electronics'
        });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('message');
      expect(res.body).toHaveProperty('product');
    });

    it('should return 403 without admin token', async () => {
      const res = await request(app)
        .post('/api/products')
        .send({
          name: 'Test Product',
          price: 99.99
        });

      expect(res.statusCode).toBe(401);
    });
  });
});
