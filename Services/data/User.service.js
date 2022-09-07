"use strict"
//CONST
  const boom = require('@hapi/boom');
  const { sequelize } = require('../../admin/admin');
  const models =  sequelize.models;

// STUCTURE
  module.exports = {
    login: async ( req, res, next )=>{
      const body =  req.body;
      try{
        const user = await models.User.findAll({where:{email: body.email }, include:['constumer']});
        if( !user ) return res.status(203).json({message : 'No te encuentras registrado'});
        if (user.password == body.password) return res.status(202).send([user]);
        return res.status(402).json({message:'Contraseña incorrecta',user})
      }catch (err){
        next(boom.badRequest(err))
      }
    },
    created: async(req, res, next)=>{
      const body = req.body;
      try{
        const user = await models.User.findOne({where:{email: body.email }});
        if( user ) return res.status(203).send({ message: 'Registro duplicado' });
        const rta = await models.User.create(body);
        return res.status(201).send({ rta });
      }catch (err){
        next(boom.badRequest(err))
      }
    },
    updateEmail: async()=>{

    },
    updatePass: async()=>{

    },
    delete: async(req, res, next)=>{
      const params =  req.params;
      try{
        const user = await models.User.findByPk( params.id );
        const rta = user.destroy();
        return res.status(201).send([rta]);
      }catch (err){
        return next(boom.badRequest(err))
      }
    }
  }
