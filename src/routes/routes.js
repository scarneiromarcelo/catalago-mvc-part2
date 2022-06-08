const routes = require("express").Router();
const MotoController = require("../controllers/MotoController");
routes.get("/", MotoController.getAll);

module.exports = routes;
