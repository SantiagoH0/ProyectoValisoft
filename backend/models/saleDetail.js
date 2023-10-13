const {sequelize, DataTypes} = require('sequelize');
const SaleDetailSequelize = require('../database/config');

const Sale = require('../models/sale');
const Product = require('../models/product');

const SaleDetail = SaleDetailSequelize.define('SaleDetail', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'Id'
    },
    SaleId: {
        type: DataTypes.INTEGER,
        field: 'SaleId',
        allowNull: false
    },
    ProductId:{
        type: DataTypes.INTEGER,
        field: 'ProductId',
        allowNull: false
    },
    Quantity: {
        type: DataTypes.INTEGER,
        field: 'Quantity',
        allowNull: false
    },
    Value:{
        type: DataTypes.DECIMAL,
        field: 'Value',
        allowNull: false
    }
},
{
    timestamps: false
});

module.exports = SaleDetail;

SaleDetail.belongsTo(Sale, {
    foreignKey: 'SaleId', // Debe coincidir con la columna de clave foránea en SaleDetail
});

SaleDetail.belongsTo(Product, {
    foreignKey: 'ProductId', // Debe coincidir con la columna de clave foránea en SaleDetail
});

