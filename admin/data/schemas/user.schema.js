"use strict"
// CONST
const joi = require('joi');

const structure = {
  id: joi.number().integer(),
  email: joi.string(),
  password: joi.string().min(4).max(32),
  print: joi.number().integer().min(10)
}

module.exports = {
  create: joi.object({
    email : structure.email.required().email,
    password: structure.password.required(),
  }),
  login : joi.object({
    email: structure.email.required(),
    password: structure.password.required(),
  }),
  id: joi.object({
    id: structure.id.required()
  })

}
