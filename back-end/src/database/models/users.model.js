module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
    {
      timestamps: false,
      tableName: 'users',
    });

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'userId', as: 'sales' });
  };

  return User;
};
