const express = require("express");

const router = express.Router();

const categoryHandler = require("../controller/hotelCategory.controller");

router.route("/").post(categoryHandler);
module.exports = router;
