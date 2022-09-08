"use strict"
// CONST
const joi = require('joi');

const structure = {
  id: joi.number().integer(),
  name: joi.string().min(3).max(15),
  email: joi.string(),
  password: joi.string().min(8).max(32),
  print: joi.number().integer().min(10)
}

module.exports = {
  //body
  created: joi.object({
    name :  structure.name.required()
  }),
  update: joi.object({
    name :  structure.name.required()
  }),
  //params
  id: joi.object({
    id:structure.id.required()
  })
}
