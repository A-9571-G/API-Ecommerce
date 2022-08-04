"use strict"
// CONST
const {} = require('../../admin/admin');
// STRUCTURE
module.exports ={
  created: async(req,res)=>{

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
  listProduct: async(req,res)=>{

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
