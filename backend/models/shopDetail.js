const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const Shop = require('../models/shop');
const Product = require('../models/product');

const ShopDetail = sequelize.define('ShopDetail', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ShopId: {
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

ShopDetail.belongsTo(Shop, {
  foreignKey: 'ShopId',
});

ShopDetail.belongsTo(Product, {
  foreignKey: 'ProductId',
});

module.exports = ShopDetail;
