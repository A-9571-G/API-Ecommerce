"use strict"

// STRUCTURE
module.exports = {
  err: async(err, req,res,next)=>{
    console.log(err) ;
    next();
  },
  errfinal: async(err, req,res,next)=>{
    console.log(err) ;
  }
}
