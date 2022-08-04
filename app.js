"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Cargar middlewares
const {midelware} = require('./admin/admin');

// cargar rutas
const {userRouter} = require('./router/routers');

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


userRouter(app);

app.use(midelware.logError);
app.use(midelware.ormErrorHandler);
app.use(midelware.errorHandler);
app.use(midelware.boomErrorHandler);


// exportar
module.exports = app;
