const express = require("express");
const router = express.Router();
const PostModel = require("../models/Rol")
const RolController = require("../controllers/RolController")

router.get("/", RolController.get);
router.get("/:id", RolController.getByID);
router.post("/", RolController.create );
router.delete("/:id", RolController.delete);
router.put("/:id", RolController.update);
module.exports = router; 