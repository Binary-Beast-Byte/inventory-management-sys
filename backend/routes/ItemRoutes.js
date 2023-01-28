const express = require("express");
const router = express.Router();
const itemController = require("../controllers/ItemController");

//create item 
router.post("/create", itemController.createItem)

router.get("/all", itemController.getItem)

module.exports = router;