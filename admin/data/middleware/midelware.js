"use strict"

// CONST
  const {ValidationError} = require('sequelize');
  const boom = require('@hapi/boom');

// STRUCTURE
module.exports = {

  logError         : async ( err, req, res, next )=>{
    console.error(err);
    next(err);
  },
  errorHandler     : async ( err, req, res, next )=>{
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  },
  boomErrorHandler : async ( err, req, res, next ) =>{
    if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
    }
    next(err);
  },
  ormErrorHandler  : async ( err, req, res, next ) =>{
    if (err instanceof ValidationError) {
      res.status(409).json({
        statusCode: 409,
        message: err.name,
        errors: err.errors
      });
    }
    next(err);
  }
}
