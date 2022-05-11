'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('textiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      solicitudId:{
        type: Sequelize.INTEGER,
        references: {
          model: "solicitudes",
          key:"id"
        },
        onDelete: "NO ACTION",
        onUpdate: "CASCADE"
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
    await queryInterface.dropTable('textiles');
  }
};