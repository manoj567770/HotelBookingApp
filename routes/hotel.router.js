const express = require("express");
const router = express.Router();
const hotelHandler = require("../controller/hotel.controller");

router.route("/").get(hotelHandler);

module.exports = router;
