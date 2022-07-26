"use strict"
// CONST
const joi = require('joi');
const structure = {
  id: joi.string().uuid(),
  name: joi.string().alphanum().min(3).max(15),
  emai: joi.string(),
  print: joi.number().integer().min(10)
}
// STRUCTURE
module.exports = {
  product: joi.object({
    name: structure.name.required(),
    email: structure.emai.required()
  })
}
