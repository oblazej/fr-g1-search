const express = require("express");
const router = express.Router();
const dragonsController = require("../../controllers/dragonsController");

router.route("/")
    .post(dragonsController.addDragon)
    .get(dragonsController.getAllDragons);

router.route("/:id")
    .get(dragonsController.getDragon);

router.route("/img/:id")
    .get(dragonsController.loadDragonImage);

router.route("/load/:id")
    .get(dragonsController.loadDragon);

module.exports = router;