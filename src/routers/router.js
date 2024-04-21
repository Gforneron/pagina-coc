// router.js
const express = require("express");
const router = express.Router();
const mainController = require("../controllers/controller.js");

router.get("/", mainController.home);

module.exports = router;
