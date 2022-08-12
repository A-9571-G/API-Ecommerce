"use stict"

const { User, Userscheme } = require('./data/user.model');
const { Consumers , Consumerscheme } = require('./data/consumers.model');
const { Category , Categoryscheme } = require('./data/category.model');
const { Product , Productscheme } = require('./data/product.model');

module.exports = {

  setupModel : async( sequelize )=>{
    User.init(Userscheme, User.config(sequelize));
    Consumers.init(Consumerscheme, Consumers.config(sequelize));
    Category.init(Categoryscheme, Category.config(sequelize));
    Product.init(Productscheme, Product.config(sequelize));

    User.associate(sequelize.models);
    Consumers.associate(sequelize.models);
    Category.associate(sequelize.models);
    Product.associate(sequelize.models);

  }

}
