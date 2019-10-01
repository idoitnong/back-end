const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./index');

class User extends Model {}
User.init({
    username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    realName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true
    },
    APIKey: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
}, {
  sequelize,
  modelName: 'user',
  timestamps: true
});

module.exports = User;
