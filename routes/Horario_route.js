const express = require("express");
const router = express.Router();
const PostModel = require("../models/Horario")
const HorarioController = require("../controllers/HorarioController")

router.get("/", HorarioController.get);
router.get("/:id", HorarioController.getByID);
router.post("/", HorarioController.create );
router.delete("/:id", HorarioController.delete);
router.put("/:id", HorarioController.update);
module.exports = router; 