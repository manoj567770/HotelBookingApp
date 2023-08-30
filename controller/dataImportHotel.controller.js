const mongoose = require("mongoose");

const Hotel = require("../model/hotel.model");
const Hotels = require("../data/hotels");

const hotelDataImportHandler = async (req, res) => {
  try {
    await Hotel.remove();
    const hotelsInDB = await Hotel.insertMany(Hotels.data);
    res.json(hotelsInDB);
  } catch (err) {
    console.log(err);
    res.json({ message: "could not add data to DB" });
  }
};

module.exports = hotelDataImportHandler;
