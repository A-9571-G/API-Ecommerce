"use strict"

"use strict"
// CONST
const boom = require('@hapi/boom');
const { sequelize } = require('../../admin/admin');
const models =  sequelize.models;

// STRUCTURE
module.exports = {
  find : async ( req, res, next ) =>{
    try{
      const rta = await models.Consumers.findAll({include : ['user']});
      return res.status(201).json(rta);
    }catch (err){
      next(boom.badRequest(err))
    }
  },
  findOne: async (req, res, next) =>{
    const params =  req.params;
    try{
      const user = await models.Consumers.findAll({where:{id:params.id},include: ['user']});
      return res.status(201).json({user});
    }catch (err){
      next(boom.badRequest(err))
    }
  },
  created: async( req, res, next )=>{
    const body = req.body;
    try{
      const data = {name : body.name , Subname :  body.Subname, user : { email: body.email , password : body.password }   }
      const user = await models.User.findOne({where:{email: body.email }});
      if( user ) return await res.status(203).send({ Error : 203, Status: "Non Authoritative Information" ,message: "Registro duplicado"});
      const newCustomer = await models.Consumers.create(data, {
        include: ['user']
      });
      return res.status(201).json(newCustomer);
    }catch (err){
      return await next(boom.badRequest(err));
    }

  },
  update: async( req, res, next )=>{
    const data = req.params;
    const body = req.body;
    try{
      const user = await models.Consumers.findByPk(data.id);
      const rta = user.update(body);
      return res.status(200).send({rta});
    }catch (err){
      return next(boom.badRequest(err));
    }
  },
  updateImage: async()=>{

  },
  imageviw: async()=>{

  },
  delete: async(req, res, next)=>{
    const params =  req.params;
    try{
      const consumers = await models.Consumers.findByPk( params.id );
      const user = await models.User.findByPk(consumers.userId);
      const rta = await consumers.destroy();
      const rta2 = await user.destroy();
      return await res.status(201).send([rta, rta2]);
    }catch (err){
      return await next(boom.badRequest(err));
    }
  }
}
