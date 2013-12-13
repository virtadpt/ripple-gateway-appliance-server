var Sequelize = require('sequelize');

var dbConfig = {
  host: process.env.POSTGRESQL_HOST,
  name: process.env.POSTGRESQL_DB_NAME,
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD
};

sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
  dialect: "postgres",
  host: dbConfig.host,
  port: 5432,
});

module.exports = sequelize;
