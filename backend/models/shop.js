const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const Supplier = require('../models/supplier');
const ShopOrder = require('../models/shopOrder')

const Shop = sequelize.define('Shop', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ShopOrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ShopDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    SupplierId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Total: {
      type: DataTypes.DECIMAL(10, 2),
    },
  }, {
    timestamps: false,
  });
  
  Shop.belongsTo(Supplier, {
    foreignKey: 'SupplierId',
  });
  
  Shop.belongsTo(ShopOrder, {
    foreignKey: 'ShopOrderId',
  });
  
  module.exports = Shop;
