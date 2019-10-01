const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./index');

class Sensor extends Model {}
Sensor.init({
    order: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sensorName: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
  sequelize,
  modelName: 'sensor',
  timestamps: true
});

module.exports = Sensor;
