"use strict"
// CONST
const {sequelize} = require('../../admin/admin');
const boom = require('@hapi/boom');
const models =  sequelize.models;
// STRUCTURE
module.exports ={
  created: async ( req , res, next ) => {
    const data = req.params;
    try{
      const constumer = await models.Consumers.findOne({where:{id : data.consumerId }});
      if(!constumer) return res.status(201).json({messenger: 'usuario no existente'});
      const newOrder = await models.Order.create(data);
      return res.status(201).json(newOrder);
    }catch (err){
      next(boom.badRequest(err));
    }
  },
  addItem: async ( req , res , next ) => {
    const data = req.body;
    try{
      const order = await models.Order.findAll( {where: {id: data.orderId}} );
      if(!order[0]) return await res.status(400).json({messenge: 'todo mal'});
      const orderProduct = await models.OrdersProduct.findAll({where: {orderId: order[0].id}});
      const rta = orderProduct.filter(item => item.productId == data.productId );

      if(rta[0]) return await res.status(400).json({messenge: 'El producto ya se encuentr registrado'});

      const newItem = await models.OrdersProduct.create(data);
      return res.status(200).json(newItem);
    }catch(err){
      next(boom.badRequest(err));
    }
  },
  find: async ( req, res, next )=>{
    try{
      const order = await models.Order.findAll({include: [
        {
          association: 'consumer',
          include: ['user']
        },
        'items'
      ]});
      return res.status(201).json(order);
    }catch (err){
      next (boom.badRequest(err));
    }
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
      const params = req.params;
      return params;
    }catch(err){
      next(boom.badData(err));
    }
  },
  delete: async( req, res, next )=>{
    const params = req.params.id;
    try{
      const user = await models.OrdersProduct.findByPk( params );
      const rta = user.destroy();
      return res.status(201).json(rta);
    }catch (err){
      next(boom.badRequest(err));
    }
  }
}
