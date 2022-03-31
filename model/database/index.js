const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  database_url,
  {
    ssl : true,
    dialectOptions : {
      ssl: true,
    },
  });

module.exports = sequelize;