const express = require("express");
const router = express.Router();

const verify = require("../middleware/verifyUser");

const wishlistHandler = require("../controller/wishListController");

const { createWishListHandler, deleteWishLstHandler, getWishListHandler } =
  wishlistHandler;

router.route("/").post(verify, createWishListHandler);

router.route("/:id").delete(verify, deleteWishLstHandler);

router.route("/").get(verify, getWishListHandler);
module.exports = router;
