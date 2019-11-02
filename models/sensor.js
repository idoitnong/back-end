const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./index');

class Sensor extends Model {}
Sensor.init({
    order: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sensorName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false,
    sequelize,
    modelName: 'sensor'
});

module.exports = Sensor;
