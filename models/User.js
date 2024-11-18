const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class User extends Model {}

User.init(
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
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          profilePicture: {
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
          modelName: 'user',
        }
);

module.exports = User;