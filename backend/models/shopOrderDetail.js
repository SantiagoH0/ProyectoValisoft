const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const ShopOrder = require('./models/orden_compra');
const Product = require('../models/product');

const ShopOrderDetail = sequelize.define('ShopOrderDetail', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ShopOrderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ProductId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
});

ShopOrderDetail.belongsTo(ShopOrder, {
  foreignKey: 'ShopOrderId',
});

ShopOrderDetail.belongsTo(Product, {
  foreignKey: 'ProductId',
});

module.exports = ShopOrderDetail;
