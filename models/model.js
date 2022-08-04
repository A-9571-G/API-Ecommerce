"use stict"

const { User, Userscheme } = require('./data/user.model');

module.exports = {

  setupModel : async( sequelize )=>{
    User.init(Userscheme, User.config(sequelize));
  }

}
