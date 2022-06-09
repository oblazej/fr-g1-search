const express = require("express");
const router = express.Router();
const colorSchemesController = require("../../controllers/colorSchemesController");

router.route("/")
    .post(colorSchemesController.createNewColorScheme)
    .get(colorSchemesController.getAllColorSchemes);

router.route("/:id")
    .get(colorSchemesController.getColorScheme);

router.route("/:primaryColor.:secondaryColor.:tertiaryColor.:element")
    .get(colorSchemesController.searchColorScheme);
    
module.exports = router;