module.exports = (sequelize, DataTypes) => {
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
    quantity: DataTypes.INTEGER,
  },
    {
      tableName: 'sales_products',
      timestamps: false,
      underscored: true,
    });

  SalesProducts.associate = ({ Sale, Product }) => {
    Sale.belongsToMany(Product, {
      as: 'product',
      foreignKey: 'saleId',
      otherKey: 'productId',
      through: SalesProducts,
    });

    Product.belongsToMany(Sale, {
      as: 'sale',
      foreignKey: 'productId',
      otherKey: 'saleId',
      through: SalesProducts,
    });
  };

  return SalesProducts;
};