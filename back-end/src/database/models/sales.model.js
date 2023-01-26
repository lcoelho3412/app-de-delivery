module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING(50),
  },
    {
      underscored: true,
      timestamps: false,
      tableName: 'sales',
    });

  Sale.associate = ({ User }) => {
    Sale.belongsTo(User, { foreignKey: 'userId', as: 'user' });
    Sale.belongsTo(User, { foreignKey: 'sellerId', as: 'seller' });
  };

  return Sale;
};
