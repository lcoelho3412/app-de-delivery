module.exports = (sequelize, DataType) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataType.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataType.STRING,
    },
    price: {
      allowNull: false,
      type: DataType.INTEGER,
    },
    urlImage: {
      allowNull: false,
      type: DataType.STRING,
    },
  },
    {
      tableName: 'products',
      timestamps: false,
      underscored: true,
    });

  Product.associate = ({ SalesProducts }) => {
    Product.hasMany(SalesProducts, {
      as: 'product',
      foreignKey: 'productId',
    });
  };

  return Product;
};