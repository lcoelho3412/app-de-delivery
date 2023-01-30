const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const registerSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

const saleSchema = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().precision(2).required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.number().required(),
  soldProducts: Joi.array().required(),
});

module.exports = { loginSchema, registerSchema, saleSchema };
