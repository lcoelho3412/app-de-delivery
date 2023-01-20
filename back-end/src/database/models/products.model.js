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
    url_image: {
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
      as: 'products',
      foreignKey: 'product_id',
    })
  };

  return Products;
};

module.exports = Products;