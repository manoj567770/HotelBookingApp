const express = require("express");
const signupHandler = require("../controller/signUpController");
const loginHandler = require("../controller/loginController");

const router = express.Router();

const User = require("../model/User.model");

router.route("/register").post(signupHandler);

router.route("/login").post(loginHandler);
module.exports = router;
