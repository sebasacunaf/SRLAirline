const express = require("express");
const router = express.Router();
const PostModel = require("../models/Vuelos")
const VueloController = require("../controllers/VuelosController")

router.get("/", VueloController.get);
router.get("/:id", VueloController.getByID);
router.post("/create", VueloController.create );
router.put("/:id", VueloController.delete);
router.put("/:id", VueloController.update);
module.exports = router; 