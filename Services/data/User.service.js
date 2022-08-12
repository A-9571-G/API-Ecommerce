"use strict"
//CONST
  const boom = require('@hapi/boom');
  const {Pool, sequelize } = require('../../admin/admin');
  const models =  sequelize.models;

// STUCTURE
  module.exports = {
    login: async (req,res)=>{

      const body =  req.body;
      const user = await models.User.findByPk(body.id);
      if( !user ) return res.status(404).send({ message : 'Usuario no encontrado'});
      const rta = {user};

      return res.status(202).send({rta});
    },
    register: async(req, res)=>{

       const params = req.body;
       const data = {email: params.email, password: params.password };
       const user = await models.User.findOne({where:{email: data.email }});
       if( user ) return res.status(203).send({ message: 'Registro duplicado' });
       const rta = await models.User.create(data);

       return res.status(201).send({ rta });
    },
    updateEmail: async()=>{

    },
    updatePass: async()=>{

    },
    deleted: async(req, res)=>{
      const user = await models.User.findByPk( id );
      const rta = user.destroy();
      return { id };
    }

  }
