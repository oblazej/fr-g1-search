const express = require("express");
const router = express.Router();
const dragonsController = require("../../controllers/dragonsController");

router.route("/load/:id")
    .get(dragonsController.loadDragon);

module.exports = router;