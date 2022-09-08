"use strict"
// CONST
  const  boom  = require('@hapi/boom');
  const {sequelize} = require('../../admin/admin');
  const models =  sequelize.models;
// STRUCTURE
module.exports ={
  created: async( req, res, next )=>{
    const data = req.body;
    try{
      const category = await models.Category.findOne({where:{ name: data.name }});
      if( category ) return res.status(203).send({ message: 'Registro duplicado' });
      const newcategory = await models.Category.create(data);
      return res.status(201).json(newcategory);
    }catch (err){
      next(boom.badRequest(err));
    }
  },
  find: async( req, res, next )=>{
    try{
      const category = await models.Category.findAll({include: ['product']});
      return res.status(200).json(category);
    }catch (err){
      next(boom.badRequest(err));
    }
  },
  findOne: async( req, res, next )=>{
    const params = req.params;
    try{
      const category = await models.Category.findByPk( params.id, { include: ['products'] } );
      return res.status(200).json(category);
    }catch (err){
      next(boom.badRequest(err));
    }
  },
  updateCategory: async( req, res, next )=>{
    const params = req.params;
    const body = req.body;
    try{
      const category = await models.Category.findByPk( params.id );
      const rta = await category.update(body);
      return res.status(201).json(rta);
    }catch (err){
      next(boom.badRequest(err));
    }
  },
  delete: async( req, res, next )=>{
    const params = req.params;
    try{
      const category = await models.Category.findByPk( params.id );
      if(!category) return res.status(401).json({message: 'usuario no encontrado'});
      const rta = await category.destroy();
      return res.status(201).json(rta);
    }catch (err){
      next(boom.badRequest(err));
    }
  }
}
