'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales_products', {
      sale_id: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          key: 'id',
          model: 'sales',
        },
        type: Sequelize.INTEGER,
      },
      product_id: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          key: 'id',
          model: 'products',
        },
        type: Sequelize.INTEGER,
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