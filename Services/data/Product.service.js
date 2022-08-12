"use strict"
// CONST
  const {sequelize} = require('../../admin/admin');
  const models = sequelize.models;
// STRUCTURE
module.exports ={
  created: async(req,res)=>{
    const data = req.body;
    console.log(data);
    const newProduct = await models.Product.create(data);
    return res.status(201).json(newProduct);
  },
  product: async(req,res)=>{

  },
  search: async(req,res)=>{
    const { limit, offset}= req.query
    if(limit,offset){
      res.send('todo bien');
    }else{
      res.send('todo mal');

    }
  },
  find: async(req,res)=>{
    const products = await models.Product.findAll();
    return res.status(200).json(products);
  },
  updateProduct: async(req,res)=>{

  },
  updateImage: async(req,res)=>{

  },
  saleProduct: async(req,res)=>{

  },
  imageviw: async(req,res)=>{

  },
  delete: async()=>{

  }

}
