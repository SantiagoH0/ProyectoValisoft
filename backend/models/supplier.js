const { Sequelize, DataTypes } = require('sequelize');
const Suppliersequelize = require('../database/config'); 

const Supplier = Suppliersequelize.define ('Supplier',{
    Id : {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        field: 'Id', 
    },
    CommercialCode : {
        type: DataTypes.INTEGER,
        field: ' CommercialCode', 
        allowNull: false, 
    },

    Name: {
        type: DataTypes.STRING,
        field: ' Name', 
        allowNull: false, 
    },
    
    Category : {
      type: DataTypes.STRING,
      field: 'Category',
      allowNull: false, 
    },

    Email: {
        type: DataTypes.STRING,
        field: ' Email', 
        allowNull: false, 
    },

    Cellphone: {
      type: DataTypes.INTEGER,
      field: ' Cellphone', 
      allowNull: false, 
    },

    State: {
        type: DataTypes.STRING,
        field: ' State', 
        validate: {
            isIn: [['ACTIVO', 'INACTIVO']], 
          },
          defaultValue: 'ACTIVO', 
        },
      }, {
        timestamps: false, 
      });
   
module.exports = Supplier;