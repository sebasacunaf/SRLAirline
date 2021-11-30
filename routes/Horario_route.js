const express = require("express");
const router = express.Router();
const PostModel = require("../models/Horario")
const HorarioController = require("../controllers/HorarioController")

router.get("/", HorarioController.get);
router.get("/:id", HorarioController.getByID);
router.post("/create", HorarioController.create );
router.put("/:id", HorarioController.delete);
router.put("/:id", HorarioController.update);
module.exports = router; 