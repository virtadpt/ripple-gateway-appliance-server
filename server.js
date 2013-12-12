var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    pg      = require('pg'),
    Sequelize = require('sequelize')

var app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.favicon())
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(express.static(path.join(__dirname, 'public')))

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

var User = sequelize.define('user', {
  id: Sequelize.INTEGER
});

User.all().success(function (users){
  console.log(users);
});

User.build({ id: 5 }).save().success(function () {
  sequelize.query('SELECT * FROM users').success(function(users){
    console.log(users);
  });
});

