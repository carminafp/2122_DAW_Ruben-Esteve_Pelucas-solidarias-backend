'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notificaciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:"users",
          key:'id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      tipo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      header: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mensaje: {
        allowNull: false,
        type: Sequelize.TEXT('long')
      },
      leido:{
        allowNull: true,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('notificaciones');
  }
};