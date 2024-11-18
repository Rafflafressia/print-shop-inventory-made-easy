const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Order extends Model {}

Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      status: { 
        type: DataTypes.STRING, 
        defaultValue: 'pending' 
    },
      totalPrice: { 
        type: DataTypes.FLOAT, 
        allowNull: false 
    },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'order',
    }
  );
  
  module.exports = Order;