"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("links", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      linkImage: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      },
      idGroupLink: {
        type: Sequelize.INTEGER,
        references: {
          model: "groupLinks",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("links");
  },
};
