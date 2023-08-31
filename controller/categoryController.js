const categoryDataFromDB = require("../model/hotel.category.model");

const categoryHandler = async (req, res) => {
  try {
    const category = await categoryDataFromDB.find({});
    category
      ? res.json(category)
      : res.status(404).json({ message: "data not found" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = categoryHandler;
