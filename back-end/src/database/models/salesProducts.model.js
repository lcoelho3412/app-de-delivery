const SalesProducts = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      foreignKey: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    productId: {
      foreignKey: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  },
    {
      tableName: 'sales_products',
      timestamps: false,
      underscored: true,
    });

  SalesProducts.associate = ({ Sales, Products }) => {
    Sales.belongsToMany(Products, {
      as: 'product',
      foreignKey: 'saleId',
      otherKey: 'productId',
      through: SalesProducts,
    });

    Products.belongsToMany(Sales, {
      as: 'sale',
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: SalesProducts,
    });
  };

  return SalesProducts;
};

module.exports = SalesProducts;