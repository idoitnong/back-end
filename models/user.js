module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
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
        timestamps: true
    });
};