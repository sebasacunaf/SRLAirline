const express = require("express");
const router = express.Router();
const PostModel = require("../models/Avion")
const AvionController = require("../controllers/AvionController")

router.get("/", AvionController.get);
router.get("/:id", AvionController.getByID);
router.post("/", AvionController.create );
router.delete("/:id", AvionController.delete);
router.put("/:id", AvionController.update);
module.exports = router; 