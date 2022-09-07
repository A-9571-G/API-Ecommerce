const joi = require('joi');

const structure = {
  id: joi.number().integer(),
  categoryId: joi.number().integer(),
  name: joi.string().min(3).max(15),
  price: joi.number(),
  stock: joi.number(),
  img : joi.string(),
  description: joi.string(),
  print: joi.number().integer().min(10),
  update: joi.date()
}

module.exports = {
  // body
  created: joi.object({
    name         :  structure.name.required(),
    price        :  structure.price.required(),
    description  :  structure.description,
    img          :  structure.img,
    stock        :  structure.stock.required()
  }),
  update: joi.object({
    name: structure.name,
    description: structure.description,
    updatedAt: structure.update
  }),
  // params
  createdParams: joi.object({
    //id: structure.id.required(),
    categoryId: structure.categoryId.required()
  }),
  id: joi.object({
    id: structure.id.required()
  })
}
