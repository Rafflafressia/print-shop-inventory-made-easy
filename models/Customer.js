const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Customer extends Model {}

Customer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          company_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          contact_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          alternate_number: {
            type: DataTypes.STRING,  
            allowNull: true,         
            defaultValue: null,      
          },
        },
        {
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'customer',
        }
);

module.exports = Customer;