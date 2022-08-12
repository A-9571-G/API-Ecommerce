"use strict"

// CONST
  const express = require('express');
  const { USER, CATEGORY, PRODUCT, SHOPPINGCAR,CONSUMER } = require('../../Services/Controllers');
  const {scheme, valide} = require('../../admin/admin');
  const routerV1 = express.Router();

// User
  routerV1.post('/register',valide(scheme.user.register,'body'),USER.register);
  routerV1.post('/login',USER.login);
  routerV1.post('/admin/login/:key',USER.login);
  routerV1.patch('/user/updateemail/:id',USER.updateEmail),
  routerV1.patch('/user/updatepass/:id',USER.updatePass),
  routerV1.delete('/user/deleted',USER.deleted),

// Products
  routerV1.post('/product/created',valide(scheme.dataProduct.created, 'body'), PRODUCT.created);
  routerV1.get('/product/search', PRODUCT.search);
  routerV1.get('/product/:id', PRODUCT.product);
  routerV1.get('/product/sale/:id', PRODUCT.saleProduct);
  routerV1.get('/product/image/:id', PRODUCT.imageviw);
  routerV1.get('/products', PRODUCT.find);
  routerV1.patch('/product/update/:id', PRODUCT.updateProduct);
  routerV1.patch('/product/update/image/:id', PRODUCT.updateImage);
  routerV1.delete('/product/deleted/:id', PRODUCT.delete);

// Category
  routerV1.get('/categorie/:id', CATEGORY.find);
  routerV1.post('/categorie/created', valide(scheme.dataCategory.created,'body'), CATEGORY.created);
  routerV1.patch('/categorie/update/:id', CATEGORY.updateCategory);
  routerV1.delete('/categorie/deleted/:id', CATEGORY.delete);

// Shopping Car
  routerV1.get('/shopping/list/:id', SHOPPINGCAR.listshopping);
  routerV1.get('/shopping/number/:id', SHOPPINGCAR.numberShoppin);
  routerV1.delete('/shopping/deleted/id', SHOPPINGCAR.delete);

// Sales

// Consumers
  routerV1.post('/consumer/register', valide(scheme.dataConsumer.created,'body'),CONSUMER.created);
  routerV1.post('/login',USER.login);
  routerV1.patch('/consumer/update/:id',CONSUMER.update),
  routerV1.patch('/consumer/image/update/:id',CONSUMER.updateImage),
  routerV1.get('/consumer/image/:id',CONSUMER.imageviw),
  routerV1.get('/consumer/find/',CONSUMER.find),
  routerV1.delete('/consumer/deleted',CONSUMER.delete),


  module.exports = routerV1;
