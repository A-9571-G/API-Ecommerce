"use strict"
//CONST
  const boom = require('@hapi/boom');
  const {Pool, sequelize } = require('../../admin/admin');
  const models =  sequelize.models;

// STUCTURE
  module.exports = {
    login: async (req,res)=>{
      const user = await models.User.findByPk(id);
      const rta = {};
      return res.status(200).send({rta});
    },
    register: async(req, res)=>{
       const params = req.body;
       const data = { name: params.name, subname: params.subname, email: params.password, password: params.email };
       const rta = await models.User.create(data);
       console.log(rta);

       return res.status(200).send({rta});
    },
    update: async(req, res)=>{
      const data = {};

      const user = await models.User.findByPk(id);
      const rta = user.update(data);

      return res.status(200).send({rta});
    },
    updateEmail: async()=>{

    },
    updatePass: async()=>{

    },
    updateimage: async()=>{

    },
    imageviw: async()=>{

    },
    deleted: async(req, res)=>{
      const user = await models.User.findByPk( id );
      const rta = user.destroy();
      return { id };
    }

  }
