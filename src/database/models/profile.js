export default (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    bio: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    occupation: {
      type: DataTypes.STRING
    },
    relationship: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING
    },
    religion: {
      type: DataTypes.STRING
    },
    workplace: {
      type: DataTypes.STRING
    },
    college: {
      type: DataTypes.STRING
    },
    collegePeriod: {
      type: DataTypes.STRING
    },
    degree: {
      type: DataTypes.STRING
    },
    highSchool: {
      type: DataTypes.STRING
    },
    highSchoolPeriod: {
      type: DataTypes.STRING
    },
    primarySchool: {
      type: DataTypes.STRING
    },
    primarySchoolPeriod: {
      type: DataTypes.STRING
    },
  }, {});

  Profile.associate = (models) => {
    // associations can be defined here
    Profile.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'id',
      onDelete: 'CASCADE'
    });
  };
  return Profile;
};
