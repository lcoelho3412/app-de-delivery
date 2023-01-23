module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: sequelize.INTEGER,
      foreignKey: true,
    },
    sellerId: {
      type: sequelize.INTEGER,
      foreignKey: true,
    },
    totalPrice: sequelize.DECIMAL(9, 2),
    deliveryAdress: sequelize.STRING(100),
    deliveryNumber: sequelize.STRING(50),
    saleDate: sequelize.DATE,
    status: sequelize.STRING(50),
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
