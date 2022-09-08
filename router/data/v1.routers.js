"use strict"

// CONST
  const express = require('express');
  const { USER, CATEGORY, PRODUCT, ORDERS ,CONSUMER } = require('../../Services/Controllers');
  const {
    dataCategory,
    dataConsumer,
    dataOrders,
    dataProduct,
    dataUser,
    Handler
  } = require('../../admin/admin');
  const routerV1 = express.Router();

// User
  routerV1.post('/register', Handler(dataUser.create,'body') ,USER.created);
  routerV1.post('/login', Handler(dataUser.login, 'body') , USER.login);
  routerV1.patch('/user/updateemail/:id',USER.updateEmail);
  routerV1.patch('/user/updatepass/:id',USER.updatePass);
  routerV1.delete('/user/deleted/:id',Handler(dataUser.id,'params'),USER.delete);

// Consumers
  routerV1.post('/consumer/register', Handler(dataConsumer.created,'body') ,CONSUMER.created);
  routerV1.patch( '/consumer/update/:id',Handler(dataConsumer.update,'body' ),Handler(dataConsumer.id,'params') ,CONSUMER.update);
  routerV1.patch('/consumer/image/update/:id',CONSUMER.updateImage);
  routerV1.get('/consumer/image/:id',CONSUMER.imageviw);
  routerV1.get('/consumer/find/', CONSUMER.find);
  routerV1.get('/consumer/findOne/:id',Handler(dataConsumer.id,'params'),CONSUMER.findOne);
  routerV1.delete('/consumer/delete/:id', Handler(dataConsumer.id, 'params') ,CONSUMER.delete);

// Products
  routerV1.post('/product/created/:categoryId',Handler(dataProduct.created, 'body'),Handler(dataProduct.createdParams,'params'), PRODUCT.created);
  routerV1.get('/product/:id',Handler(dataProduct.id, 'params'), PRODUCT.findOne);
  routerV1.get('/product/:id',PRODUCT.product);
  routerV1.get('/product/sale/:id', PRODUCT.saleProduct);
  routerV1.get('/product/image/:id', PRODUCT.imageviw);
  routerV1.get('/products', PRODUCT.find);
  routerV1.patch('/product/update/:id',Handler(dataProduct.update, 'body'), PRODUCT.updateProduct);
  routerV1.patch('/product/update/image/:id', PRODUCT.updateImage);
  routerV1.delete('/product/deleted/:id', PRODUCT.delete);

// Category
  routerV1.get('/categorie',Handler(dataCategory.created,'body'),CATEGORY.find);
  routerV1.get('/categorie/:id',Handler(dataCategory.id, 'params'), CATEGORY.findOne);
  routerV1.post('/categorie/created',Handler(dataCategory.created,'body'), CATEGORY.created);
  routerV1.patch('/categorie/update/:id',Handler(dataCategory.update, 'body'), CATEGORY.updateCategory);
  routerV1.delete('/categorie/deleted/:id',Handler(dataCategory.id, 'params'),CATEGORY.delete);

// Order
  routerV1.post('/order/:consumerId',Handler(dataOrders.create,'params'), ORDERS.created);
  routerV1.post('/order/add/product',Handler(dataOrders.addItem, 'body'), ORDERS.addItem);
  routerV1.get('/orders/findOne/:id',Handler(dataOrders.id, 'params') ,ORDERS.findOne);
  routerV1.get('/orders/find',ORDERS.find);
  routerV1.delete('/orders/delete/:id',Handler(dataOrders.id, 'params'),ORDERS.delete);

// Admin
  routerV1.post('/admin/login/:key');

  module.exports = routerV1;
