"use strict"
// CONST
const joi = require('joi');

const structure = {
  id: joi.string().uuid(),
  name: joi.string().alphanum().min(3).max(15),
  subname: joi.string().alphanum().min(3).max(15),
  email: joi.string(),
  password: joi.string().min(8).max(32),
  print: joi.number().integer().min(10)
}

module.exports = {
  register: joi.object({
    //name: structure.name,
    //subname: structure.subname,
    email : structure.email.required(),
    password: structure.password.required(),
  })
}
