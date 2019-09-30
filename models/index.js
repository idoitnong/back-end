const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.js'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Sensor = require('./sensor')(sequelize, Sequelize);

db.User.hasMany(db.Sensor, { foreignKey: 'ownerId', sourceKey: 'id' });
db.Sensor.belongsTo(db.User, { foreignKey: 'ownerId', sourceKey: 'id' });

module.exports = db;