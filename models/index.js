const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.js'))[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports.sequelize = sequelize;

// model initialize
const User = require('./user');
const Sensor = require('./sensor');

User.hasMany(Sensor, { foreignKey: 'ownerId', sourceKey: 'id' });
Sensor.belongsTo(User, { foreignKey: 'ownerId', sourceKey: 'id' });

module.exports.User = User;
module.exports.Sensor = Sensor;
