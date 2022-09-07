"use strict"
// CONST
const joi = require('joi');

const structure = {
  id: joi.number().integer(),
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
    Subname: structure.subname,
    email : structure.email.required(),
    password: structure.password.required()
  }),
  update: joi.object({
    name: structure.name.required(),
    Subname: structure.subname.required()
  }),

  // params
  id: joi.object({
    id: structure.id.required()
  })
}
