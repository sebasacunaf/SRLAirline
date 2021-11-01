const express = require("express");
const router = express.Router();
const PostModel = require("../models/Usuario")
const UsuarioController = require("../controllers/UsuarioController")

router.get("/", UsuarioController.get);
router.get("/:id", UsuarioController.getByID);
router.post("/", UsuarioController.create );
router.delete("/:id", UsuarioController.delete);
router.put("/:id", UsuarioController.update);
module.exports = router; 