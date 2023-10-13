const { Sequelize, DataTypes } = require('sequelize');
const Warnsequelize = require('../database/config'); 

const Warn = Warnsequelize.define('warn',{
    Id: {
        type:  DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        field: 'Id', 
    },

    Entity: {
        type: DataTypes.STRING,
        field: 'Entity', 
        allowNull: false, 
    },
    Date: {
        type: DataTypes.DATE,
        field: 'Date', 
        defaultValue: Sequelize.literal('CURRENT_DATE'), 
    },

    Message: {
        type: DataTypes.STRING,
        field: 'Message', 
        allowNull: false, 
        
    }
})

module.exports = Warn;