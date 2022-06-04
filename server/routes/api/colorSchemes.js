const express = require("express");
const router = express.Router();
const colorSchemesController = require("../../controllers/colorSchemesController");

router.route("/")
    .post(colorSchemesController.createNewColorScheme);

router.route("/:primaryColor.:secondaryColor.:tertiaryColor.:element")
    .get(colorSchemesController.searchColorScheme);
    
module.exports = router;