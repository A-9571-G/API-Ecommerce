"use strict"
// CONST
const joi = require('joi');

const structure = {
  id: joi.string().uuid(),
  email: joi.string(),
  password: joi.string().min(8).max(32),
  print: joi.number().integer().min(10)
}

module.exports = {
  register: joi.object({
    email : structure.email.required().email,
    password: structure.password.required(),
  })
}
