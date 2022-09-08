"use strict"
const  boom  = require('@hapi/boom');
// CONST
  const {sequelize} = require('../../admin/admin');
  const models = sequelize.models;
// STRUCTURE
module.exports ={
  created: async( req, res, next )=>{
    const body = req.body;
    const params = req.params;
    const data = {
      name: body.name,
      price: body.price,
      description: body.description,
      stock: body.stock,
      categoryId: params.categoryId
    };
    try{
    const newProduct = await models.Product.create(data);
    return res.status(201).json(newProduct);
    }catch (err){
      next(boom.badRequest(err));
    }

  },
  product: async( )=>{

  },
  findOne: async( req, res, next )=>{
    const params = req.params;
    try{
      const product = await models.Product.findAll({where:{id:params.id}, include : ['category']});
      return res.status(201).json(product);
    }catch (err){
      next(boom.badRequest(err));
    }
  },
  find: async( req, res, next )=>{
     try{
      const option = { include : ['category'] }
      const{ offset, limit } = req.query;
      if( limit && offset ){
        option.limit = limit,
        option.offset = offset
      }
      const products = await models.Product.findAll(option);
       return res.status(200).json(products);
     }catch (err){
      next(boom.badRequest(err));
    }
  },
  updateProduct: async( req, res, next )=>{
    const params = req.params;
    const body = req.body;
    try{
      const product = await models.Product.findByPk(params.id);
      const rta = await product.update(body);
      return res.status(201).json(rta);
    }catch (err){
      next(boom.badRequest(err));
    }
  },
  updateImage: async( )=>{

  },
  saleProduct: async( )=>{

  },
  imageviw: async( )=>{

  },
  delete: async(req, res, next)=>{
    try{
      const product = await models.Product.findByPk(req.params.id);
      const rta = await product.destroy();
      return res.status(201).json(rta);
    }catch (err){
      next(boom.badRequest(err));
    }
  }
}
