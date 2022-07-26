"use strict"
//CONST
  const express = require('express');
  const { USER, CATEGORY, PRODUCT, SHOPPINGCAR } = require('../controller/Controllers');
  const app = express.Router();
  const {scheme, value, midelware, valide} = require('../admin/admin');
//MIDELWARE

// CONTROLLERS
  //Prueva
    app.get('/', valide(scheme.product,'body'),(req,res)=>{
      res.status(200).send({
        messege: 'todo bien'
      });
    });

  //User
    app.post('/register',USER.register);
    app.post('/login',USER.login);
    app.post('/admin/login/:key',USER.login);
    app.patch('/user/update/:id',USER.update),
    app.patch('/user/updateemail/:id',USER.updateEmail),
    app.patch('/user/updatepass/:id',USER.updatePass),
    app.patch('/user/image/update/:id',USER.updateimage),
    app.get('/user/image/:id',USER.imageviw),
    app.delete('/user/deleted',USER.deleted),

  //Products
    app.get('/products', PRODUCT.listProduct);
    app.post('/product/created/:id', PRODUCT.created);
    app.get('/product/search', PRODUCT.search);
    app.get('/product/:id', PRODUCT.product);
    app.patch('/product/update/:id', PRODUCT.updateProduct);
    app.patch('/product/update/image/:id', PRODUCT.updateImage);
    app.get('/product/sale/:id', PRODUCT.saleProduct);
    app.get('/product/image/:id', PRODUCT.imageviw)
    app.delete('/product/deleted/:id', PRODUCT.delete)

  //Category
    app.get('/categorie/:id ', CATEGORY.listCategory);
    app.post('/categorie/created/:id ', CATEGORY.created);
    app.patch('/categorie/update/:id', CATEGORY.updateCategory);
    app.delete('/categorie/deleted/:id', CATEGORY.delete);

  //Shopping Car
    app.get('/shopping/list/:id', SHOPPINGCAR.listshopping);
    app.get('/shopping/number/:id', SHOPPINGCAR.numberShoppin);
    app.delete('/shopping/deleted/id', SHOPPINGCAR.delete);



module.exports = app;
