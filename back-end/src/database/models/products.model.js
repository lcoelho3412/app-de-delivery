const Products = (sequelize, DataType) => {
  const Products = sequelize.define('Products', {
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

  Products.associate = ({ SalesProducts }) => {
    Products.hasMany(SalesProducts, {
      as: 'product',
      foreignKey: 'productId',
    });
  };

  return Products;
};

module.exports = Products;