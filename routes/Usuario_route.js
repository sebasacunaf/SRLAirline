const express = require("express");
const router = express.Router();
const PostModel = require("../models/Usuario")
const UsuarioController = require("../controllers/UsuarioController")

router.get("/", UsuarioController.get);
router.get("/:id", UsuarioController.getByID);

router.put("/:id", UsuarioController.update);
router.post("/signup", UsuarioController.signup);
router.post("/signin", UsuarioController.signin);
module.exports = router; 