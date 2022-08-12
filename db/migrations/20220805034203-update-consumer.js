'use strict';



module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn( USER_TABLE, 'role', Userscheme.role );
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(  USER_TABLE, 'role',   );

  }
};
