const Joi = require('joi');

const userValidation = {
  register: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    name: Joi.string().min(2).required(),
    phone: Joi.string().pattern(/^[0-9]{10,11}$/),
    address: Joi.string()
  }),

  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
};

const productValidation = {
  create: Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string(),
    price: Joi.number().positive().required(),
    stock: Joi.number().integer().min(0).required(),
    category: Joi.string().required(),
    imageUrl: Joi.string().uri()
  })
};

const orderValidation = {
  create: Joi.object({
    items: Joi.array().items(
      Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().integer().min(1).required()
      })
    ).min(1).required(),
    shippingAddress: Joi.string().required()
  })
};

module.exports = {
  userValidation,
  productValidation,
  orderValidation
};
