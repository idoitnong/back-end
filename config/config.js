require('dotenv').config();

module.exports = {
  development: {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'idoitnong_development',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'false'
  },
  production: {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'idoitnong',
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: 'false',
    logging: false
  }
}
