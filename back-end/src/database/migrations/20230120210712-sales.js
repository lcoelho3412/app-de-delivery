'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        field: 'user_id',
      },
      sellerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        field: 'seller_id',
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 2),
        field: 'total_price',
      },
      deliveryAdress: {
        allowNull: false,
        type: Sequelize.STRING(100),
        field: 'delivery_adress',
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING(50),
        field: 'delivery_number',
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};