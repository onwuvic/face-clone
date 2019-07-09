/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Profiles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    bio: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    occupation: {
      type: Sequelize.STRING
    },
    relationship: {
      type: Sequelize.STRING
    },
    website: {
      type: Sequelize.STRING
    },
    religion: {
      type: Sequelize.STRING
    },
    workplace: {
      type: Sequelize.STRING
    },
    college: {
      type: Sequelize.STRING
    },
    collegePeriod: {
      type: Sequelize.STRING
    },
    degree: {
      type: Sequelize.STRING
    },
    highSchool: {
      type: Sequelize.STRING
    },
    highSchoolPeriod: {
      type: Sequelize.STRING
    },
    primarySchool: {
      type: Sequelize.STRING
    },
    primarySchoolPeriod: {
      type: Sequelize.STRING
    },
    userId: {
      allowNull: false,
      unique: true,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Profiles')
};
