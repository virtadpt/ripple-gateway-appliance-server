var Sequelize = require('sequelize');

var dbConfig = {
  host: '127.0.0.1',
  name: 'sequelize_development',
  user: 'postgres',
  password: 'password'
};

sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
  dialect: "postgres",
  host: dbConfig.host,
  port: 5432,
  omitNull: true
});

module.exports = sequelize;
