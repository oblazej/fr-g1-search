const express = require("express");
const router = express.Router();
const colorSchemesController = require("../../controllers/colorSchemesController");

router.route("/")
    .post(colorSchemesController.createNewColorScheme);

module.exports = router;