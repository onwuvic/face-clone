/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        min: 5
      }
    },
    slug: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    gender: {
      type: Sequelize.ENUM,
      values: ['male', 'female']
    },
    isVerified: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    dateOfBirth: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
};
