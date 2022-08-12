"use strict"

"use strict"
// CONST
const Boom = require('@hapi/boom');
const {Pool, sequelize } = require('../../admin/admin');
const models =  sequelize.models;

// STRUCTURE
module.exports ={
  find : async ( req, res ) =>{
    const rta = await models.Consumers.findAll({
      include : ['user']
    });
    return res.status(201).json(rta);
  },
  created: async( req, res )=>{
    // data
    const body = req.body;
    const data = {name : body.name , Subname :  body.subname, user : { email: body.email , password : body.password },   }
    // db
    const user = await models.User.findOne({where:{email: body.email }});
    if( user ) return res.status(203).send({ Error : 203, Status: "Non Authoritative Information" ,message: "Registro duplicado"});
    const newCustomer = await models.Consumers.create(data, {
      include: ['user']
    });
    // rta
    return res.status(201).json(newCustomer);

  },
  update: async( req, res )=>{
    const data = req.body;
    const user = await models.User.findByPk(id);
    const rta = user.update(data);

    return res.status(200).send({rta});
  },
  updateImage: async(req,res)=>{

  },
  imageviw: async(req,res)=>{

  },
  delete: async()=>{

  }

}
