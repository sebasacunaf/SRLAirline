const express = require("express");
const router = express.Router();
const PostModel = require("../models/Ruta")
const RutaController = require("../controllers/RutaController")

router.get("/", RutaController.get);
router.get("/:id", RutaController.getByID);
router.post("/create", RutaController.create );
router.delete("/:id", RutaController.delete);
router.put("/:id", RutaController.update);
module.exports = router; 