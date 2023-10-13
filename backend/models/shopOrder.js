const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const Supplier = require('../models/supplier');

const ShopOrder = sequelize.define('ShopOrder', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  SupplierId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ShopOrderDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  Total: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  timestamps: false,
});

ShopOrder.belongsTo(Supplier, {
  foreignKey: 'SupplierId',
});

module.exports = ShopOrder;