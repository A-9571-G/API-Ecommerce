"use strict"
// CONST

  const {sequelize} = require('../../admin/admin');
  const models =  sequelize.models;

// STRUCTURE
module.exports ={
  created: async(req,res)=>{
    const data = req.body;
    const category = await models.Category.findOne({where:{ name: data.name }});
    if( category ) return res.status(203).send({ message: 'Registro duplicado' });
    const newcategory = await models.Category.create(data);
    return res.status(201).json(newcategory);
  },
  find: async(req,res)=>{
    const category = await models.Category.findAll();
    return res.status(200).json(category);

  },
  updateCategory: async(req,res)=>{

  },
  delete: async()=>{

  }
}
