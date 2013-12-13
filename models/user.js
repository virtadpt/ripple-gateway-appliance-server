var Sequelize = require('sequelize');
var db = require('../db');

var User = sequelize.define('user', {
  id: Sequelize.INTEGER
});

module.exports = User;
