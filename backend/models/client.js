const {Sequelize, DataTypes} = require('sequelize');
const clientSequelize = require('../database/config');

const Client = clientSequelize.define('client', {
       Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id'
       },
       Document: {
        type: DataTypes.BIGINT,
        field: 'Document',
        unique: true,
        allowNull: false
       },
       Name: {
        type: DataTypes.STRING,
        field: 'Name',
        allowNull: false
       },
       LastName: {
        type: DataTypes.STRING,
        field: 'LastName',
        allowNull: false
       },
       Cellphone: {
        type: DataTypes.STRING,
        field: 'Cellphone',
        allowNull: false
       },
       State: {
        type: DataTypes.STRING,
        field: 'State',
        validate: {
            isIn:[['ACTIVO', 'INACTIVO']]
        },
        defaultValue: 'ACTIVO',
       }
},{
    timestamps: false
});

module.exports = Client;
