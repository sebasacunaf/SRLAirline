const express = require("express");
const router = express.Router();
const PostModel = require("../models/Factura")
const FacturaController = require("../controllers/FacturaController")

router.get("/", FacturaController.get);
router.get("/:id", FacturaController.getByID);
router.post("/create", FacturaController.create );
router.delete("/:id", FacturaController.delete);
router.put("/:id", FacturaController.update);
module.exports = router; 