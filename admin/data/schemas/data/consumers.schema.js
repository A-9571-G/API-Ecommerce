"use strict"
const Joi = require('joi');
// CONST
const joi = require('joi');

const structure = {
  id: joi.string().uuid(),
  name: joi.string().min(3),
  subname: joi.string().min(3),
  email: joi.string().email(),
  password: joi.string().min(8).max(32),
  print: joi.number().integer().min(10)
}

module.exports = {
  // Body
  created: joi.object({
    name: structure.name.required(),
    subname: structure.subname,
    email : structure.email.required(),
    password: structure.password.required()
  })

  // params

}
