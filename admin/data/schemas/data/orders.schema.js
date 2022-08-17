"use strict"
// CONST
const joi = require('joi');

  const id = joi.number().integer();
  const consumerId = joi.number().integer();
  const orderId = joi.number().integer();
  const productId = joi.number().integer();
  const amount = joi.number().integer().min(1);

  module.exports = {
    getOrder : joi.object({
      id: id.required(),
    }),
    create : joi.object({
      consumerId: consumerId.required()
    }),
    addItem : joi.object({
      orderId: orderId.required(),
      productId: productId.required(),
      amount: amount.required(),
    })
  };
