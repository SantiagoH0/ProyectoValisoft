const {sequelize, DataTypes} = require('sequelize');
const SaleSequelize = require('../database/config');

const Client = require('../models/client')

const Sale = SaleSequelize.define('Sale',{
    Id:  {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'Id'
    },
    SaleDate: {
        type: DataTypes.DATE,
        field: 'SaleDate',
        defaultValue: sequelize.literal('CURRENT_DATE')
    },
    ClienteId: {
        type: DataTypes.INTEGER,
        field: 'ClienteId',
        allowNull: false
    },
    Total: {
        type: DataTypes.DECIMAL,
        field: 'Total',
        //allowNull: true
    }
},{
    timestamps: false
});

module.exports = Sale;

Sale.belongsTo(Client, {
    foreignKey: 'ClienteId', // Debe coincidir con la columna de clave foránea en Sale
});
