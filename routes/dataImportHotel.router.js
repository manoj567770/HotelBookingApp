const express = require("express");

const hotelDataImportHandler = require("../controller/dataImportHotel.controller");

const router = express.Router();

router.route("/").post(hotelDataImportHandler);
module.exports = router;
