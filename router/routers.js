"use strict"
//CONST
  const express = require('express');
  const {scheme, value, midelware, valide} = require('../admin/admin');
  const { USER, CATEGORY, PRODUCT, SHOPPINGCAR } = require('../Services/Controllers');
  const routerV1 = require('./data/v1.routers');
//MIDELWARE

// CONTROLLERS
module.exports = {
  userRouter: async (app)=>{
    app.use('/api/v1', routerV1 );
    app.use('/api/v2', routerV1 );
  }
};
