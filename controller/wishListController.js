const wishList = require("../model/wishList.model");
const createWishListHandler = async (req, res) => {
  try {
    const newWishList = new wishList(req.body);
    const savedWishList = await newWishList.save();
    res.status(201).json(savedWishList);
  } catch (err) {
    res.status(500).json({ message: "failed to create wishlist" });
  }
};

const deleteWishLstHandler = async (req, res) => {
  try {
    await wishList.findByIdAndDelete(req.params.id);
    res.json({ message: "Hotel delete from Wishlist" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Hotel could not delete from wishlist" });
  }
};

const getWishListHandler = async (req, res) => {
  try {
    const wishListHotel = await wishList.find({});
    wishListHotel
      ? res.json(wishListHotel)
      : res.json({ message: "No items found in the wishlist" });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  createWishListHandler,
  deleteWishLstHandler,
  getWishListHandler,
};
