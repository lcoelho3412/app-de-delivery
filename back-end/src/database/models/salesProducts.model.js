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
      as: 'products',
      foreignKey: 'sale_id',
      otherKey: 'products_id',
      through: SalesProducts,
    });

    Products.belongsToMany(Sales, {
      as: 'sales',
      foreignKey: 'products_id',
      otherKey: 'sale_id',
      through: SalesProducts,
    })
  };

  return SalesProducts;
};

module.exports = SalesProducts;