const Sequelize = require("sequelize");
const connection = require("../database/db");

const Moto = connection.define(
  "moto",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      AllowNull: false,
    },
    imagem: {
      type: Sequelize.STRING,
      AllowNull: false,
    },
  },
  {
    freezeTable: true,
    timestamps: false,
    createdAt: false,
    updateAt: false,
  }
);

module.exports = Moto;
