const Moto = require("../models/Moto");

const getAll = async (req, res) => {
  try {
    const motos = await Moto.findAll();
    res.render("index", { motos, motoPut: null, pokemonDel: null });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const signup = (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
const create = async (req, res) => {
  try {
    const moto = req.body;

    if (!moto) {
      return res.redirect("/signup");
    }

    await Moto.create(moto);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const motos = await Moto.findAll();
    const moto = await Moto.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        motos,
        motoPut: moto,
        motoDel: null,
      });
    } else {
      res.render("index", {
        motos,
        motoPut: null,
        motoDel: moto,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const moto = req.body;
    await Moto.update(moto, { where: { id: req.params.id } });
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await Moto.destroy({where: {id: req.params.id}});
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
  signup,
  create,
  getById,
  update,
  remove,
};
