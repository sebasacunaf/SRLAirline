const express = require("express");
const router = express.Router();
const PostModel = require("../models/Factura")
const ReservacionesController = require("../controllers/ReservacionesController")

router.get("/", ReservacionesController.get);
router.get("/:id", ReservacionesController.getByID);
router.post("/create", ReservacionesController.create );
router.put("/:id", ReservacionesController.delete);
router.put("/:id", ReservacionesController.update);
module.exports = router; 