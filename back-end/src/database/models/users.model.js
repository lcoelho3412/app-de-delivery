const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

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

  User.associate = ({ Sale }) => {
    User.hasMany(Sale, { foreignKey: 'userId', as: 'user' });
    User.hasMany(Sale, { foreignKey: 'sellerId', as: 'seller' });
  };

  return User;
};
