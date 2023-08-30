const hotelDataFromDB = require("../model/hotel.model");

const hotelHandler = async (req, res) => {
  const hotelCategory = req.query.category;
  let hotels;
  try {
    if (hotelCategory) {
      hotels = await hotelDataFromDB.find({ category: hotelCategory });
    } else {
      hotels = await hotelDataFromDB.find({});
    }

    hotels
      ? res.json(hotels)
      : res.status(404).json({ message: "data not found" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = hotelHandler;
