'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales_products', {
      saleId: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          key: 'id',
          model: 'sales',
        },
        type: Sequelize.INTEGER,
        field: 'sale_id'
      },
      productId: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          key: 'id',
          model: 'products',
        },
        type: Sequelize.INTEGER,
        field: 'product_id',
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    },
      {
        underscored: true,
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales_products');
  },
};