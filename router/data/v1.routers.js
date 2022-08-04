"use strict"

//CONST
  const express = require('express');
  const { USER, CATEGORY, PRODUCT, SHOPPINGCAR } = require('../../Services/Controllers');
  const {scheme, value, valide} = require('../../admin/admin');
const Category = require('../../Services/data/Category');
  const routerV1 = express.Router();

/*   router.get('/', valide(scheme.product,'body'),(req,res)=>{
    res.status(200).send({
      messege: 'todo bien'
    });
  }); */
  //User
  routerV1.post('/register', valide(scheme.user.register,'body'),USER.register);
  routerV1.post('/login',USER.login);
  routerV1.post('/admin/login/:key',USER.login);
  routerV1.patch('/user/update/:id',USER.update),
  routerV1.patch('/user/updateemail/:id',USER.updateEmail),
  routerV1.patch('/user/updatepass/:id',USER.updatePass),
  routerV1.patch('/user/image/update/:id',USER.updateimage),
  routerV1.get('/user/image/:id',USER.imageviw),
  routerV1.delete('/user/deleted',USER.deleted),

//Products
  routerV1.get('/products', PRODUCT.listProduct);
  routerV1.post('/product/created/:id', PRODUCT.created);
  routerV1.get('/product/search', PRODUCT.search);
  routerV1.get('/product/:id', PRODUCT.product);
  routerV1.patch('/product/update/:id', PRODUCT.updateProduct);
  routerV1.patch('/product/update/image/:id', PRODUCT.updateImage);
  routerV1.get('/product/sale/:id', PRODUCT.saleProduct);
  routerV1.get('/product/image/:id', PRODUCT.imageviw)
  routerV1.delete('/product/deleted/:id', PRODUCT.delete)

//Category
  routerV1.get('/categorie/:id ', CATEGORY.listCategory);
  routerV1.post('/categorie/created/:id ', CATEGORY.created);
  routerV1.patch('/categorie/update/:id', CATEGORY.updateCategory);
  routerV1.delete('/categorie/deleted/:id', CATEGORY.delete);

//Shopping Car
  routerV1.get('/shopping/list/:id', SHOPPINGCAR.listshopping);
  routerV1.get('/shopping/number/:id', SHOPPINGCAR.numberShoppin);
  routerV1.delete('/shopping/deleted/id', SHOPPINGCAR.delete);


  module.exports = routerV1;
