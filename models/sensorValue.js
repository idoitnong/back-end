const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('./index');

class SensorValue extends Model {}
SensorValue.init({
    sensorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    value: {
        type: DataTypes.FLOAT,
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
    modelName: 'sensorValue'
});

module.exports = SensorValue;
