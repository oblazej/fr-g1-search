const express = require("express");
const router = express.Router();
const dragonsController = require("../../controllers/dragonsController");

router.route("/")
    .post(dragonsController.addDragon)
    .get(dragonsController.getAllDragons);

router.route("/load/:id")
    .get(dragonsController.loadDragon);

module.exports = router;