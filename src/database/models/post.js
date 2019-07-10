export default (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    text: {
      type: DataTypes.TEXT
    }
  }, {});

  Post.associate = (models) => {
    // associations can be defined here
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      targetKey: 'id',
      onDelete: 'CASCADE'
    });
  };
  return Post;
};
