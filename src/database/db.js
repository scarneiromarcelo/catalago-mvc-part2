const Sequelize = require("sequelize");
const connection = new Sequelize(
  process.env.DB_BASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: 5432, // Porta padrão de acesso do db
    dialect: "postgres",
  }
);

module.exports = connection;
