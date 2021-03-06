const express = require("express");
const router = express.Router();
const PostModel = require("../models/TipoAvion")
const TipoAvionController = require("../controllers/TipoAvionController")

router.get("/", TipoAvionController.get);
router.get("/:id", TipoAvionController.getByID);
router.post("/create", TipoAvionController.create );
router.put("/:id", TipoAvionController.delete);
router.put("/:id", TipoAvionController.update);
module.exports = router; 