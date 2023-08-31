const Hotel = require("../model/hotel.model");
const singleHotelHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const singleHotel = await Hotel.findById(id);
    if (singleHotel) {
      res.json(singleHotel);
    }
  } catch (err) {
    res.json({ message: "data could not found" });
  }
};
module.exports = singleHotelHandler;
