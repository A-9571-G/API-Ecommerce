"use strict"
// CONST
const {sequelize} = require('../../admin/admin');
const boom = require('@hapi/boom');
const models =  sequelize.models;
// STRUCTURE
module.exports ={
  created: async ( req , res, next ) => {
    try{
      const data = req.params;
      const constumer = await models.Consumers.findOne({where:{id : data.consumerId }});
      if(!constumer) return next(boom.badRequest(err));
      const newOrder = await models.Order.create(data);
      return res.status(201).json(newOrder);
    }catch (err){
      next(boom.badRequest(err));
    }
  },
  addItem: async ( req , res , next ) => {
    try{
      const data = req.body;
      const newItem = await models.OrdersProduct.create(data);
      return res.status(200).json(newItem);
    }catch(err){
      next(boom.badRequest(err));
    }
  },
  find: async ( req , res )=>{
  },
  findOne: async ( req, res, next )=>{
    const data = req.params;
    try{
      const order = await models.Order.findByPk(data.id, {
        include: [
          {
            association: 'consumer',
            include: ['user']
          },
          'items'
        ]});
      return res.status(200).json(order);
    }catch(err){
      next(boom.badRequest(err));
    }
  },
  pay : async ( req, res, next ) => {
    try{

    }catch(err){
      next(boom.badData(err));
    }
  },
  update: async ()=>{

  },
  delete: async( req , res )=>{
    const user = await models.User.findByPk( id );
    const rta = user.destroy();
    return { id };
  }
}
