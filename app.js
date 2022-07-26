"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// cargar rutas
const userRouter = require('./router/routers');

// general middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// cors
const whitelist = ['http://localhost:8080']
const options = {
  origin:( origin, callback )=>{

    if(whitelist.includes(origin) || !origin) return callback( null, true );
    callback(new Error('no tienes permiso'));

  }
}
app.use(cors(options));
// rutas
app.use('/', userRouter);


// exportar
module.exports = app;
