"use strict"

// CONST
const boom = require('@hapi/boom');

function Handler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      res.status(401).send({
        statusCode: 401,
        error: 'unauthorized',
        message: 'Llena los campos correspondientes'
      });
    }
    next();
  }
}

module.exports = Handler;
