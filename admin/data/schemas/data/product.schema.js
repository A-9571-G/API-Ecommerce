const joi = require('joi');

const structure = {
  id: joi.string().uuid(),
  name: joi.string().min(3).max(15),
  price: joi.number(),
  stock: joi.number(),
  img : joi.string(),
  description: joi.string(),
  categoryId : joi.number(),
  print: joi.number().integer().min(10)
}

module.exports = {
  // body
  created: joi.object({
    name         :  structure.name.required(),
    price        :  structure.price.required(),
    description  :  structure.description,
    categoryId   :  structure.categoryId.required(),
    img          :  structure.img,
    stock        :  structure.stock.required()
  })
}
