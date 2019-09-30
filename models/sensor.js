module.exports = (sequelize, DataTypes) => {
    return sequelize.define('sensor', {
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
        timestamps: true
    });
};