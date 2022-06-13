const routes = require("express").Router();
const MotoController = require("../controllers/MotoController");
routes.get("/", MotoController.getAll);
routes.get("/signup", MotoController.signup);
routes.post("/create", MotoController.create);
routes.get("/getById/:id/:method", MotoController.getById);
routes.post("/update/:id/", MotoController.update);
routes.get("/remove/:id", MotoController.remove);

module.exports = routes;
