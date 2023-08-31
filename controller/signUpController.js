const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../model/User.model");

const signupHandler = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      number: req.body.number,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_SECRET_KEY
      ).toString(),
    });
    const existingUser = await User.findOne({ number: req.body.number });
    if (existingUser) {
      res.json({ message: "User Already Exist" });
    } else {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "user creating Error" });
  }
};

module.exports = signupHandler;
