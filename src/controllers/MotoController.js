const Moto = require("../models/Moto");

const getAll = async (req, res) => {
  try {
    const motos = await Moto.findAll(); //findAll é uma função do Sequelize
    res.render("index", { motos, moto: undefined });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
};
