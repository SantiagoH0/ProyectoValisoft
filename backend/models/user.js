const { Sequelize, DataTypes } = require('sequelize');
const Usersequelize = require('../database/config'); 

const User = Usersequelize.define('user',{
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        field: 'Id'
    },
    Name: {
        type: DataTypes.STRING,
        field: 'Name', 
        allowNull: false, 
    },
    LastName: {
        type: DataTypes.STRING,
        field: 'LastName', 
        allowNull: false, 
    },

    PasswordUser: {
        type: DataTypes.STRING,
        field: 'Password', 
        validate: {
          len: [5, 10], 
        },
        allowNull: false, 
    },

    Email: {
        type: DataTypes.STRING,
        field: 'Email', 
    },
    
    State: {
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

module.exports = User;