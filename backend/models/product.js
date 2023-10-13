const { Sequelize, DataTypes } = require('sequelize');
const sequelizeProduct = require('../database/config'); 

const Product = sequelizeProduct.define('Product',{
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id', 
      },
      Code : {
        type: DataTypes.INTEGER,
        field: 'Code',
        unique: true, 
        allowNull: false, 
      },
      Name: {
        type: DataTypes.STRING,
        field: 'Name',
        allowNull: false, 
      },
      Description : {
        type: DataTypes.STRING,
        field: 'Description',
        allowNull: false, 
      },
      Category : {
        type: DataTypes.STRING,
        field: 'Category',
        allowNull: false, 
      },
      Stock : {
        type: DataTypes.INTEGER,
        field: 'Stock',
        allowNull: false,
      },
      MinStock: {
        type: DataTypes.INTEGER,
        field: 'MinStock',
        allowNull: false,
      },
      UnitValue : {
        type: DataTypes.FLOAT,
        field: 'UnitValue',
        allowNull: false,  
      },
      State : {
        type: DataTypes.STRING,
        field: 'State', 
        validate: {
          isIn: [['ACTIVO', 'INACTIVO']], 
        },
        defaultValue: 'ACTIVO', 
      },
    }, {
      timestamps: false, 
    });


module.exports = Product

