const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./config/dbconfig");
const hotelRouter = require("./routes/hotel.router");
const hotelDataAddedInDataBase = require("./routes/dataImportHotel.router");
const categoryDataAddedInDataBase = require("./routes/dataImport.category.router");
const categoryrouter = require("./routes/hotel.category.router");
const authRouter = require("./routes/userAuthRouter");
const singleHotelRouter = require("./routes/singleHotel.router");
const wishList = require("./routes/wishList.router");

const PORT = 3500;
const app = express();

connectDB();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/hotelsdata", hotelDataAddedInDataBase);
app.use("/api/hotels", hotelRouter);
app.use("/api/Importhotelcategory", categoryDataAddedInDataBase);
app.use("/api/hotelcategory", categoryrouter);
app.use("/api/auth", authRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/wishlist", wishList);

mongoose.connection.once("open", () => {
  console.log("database connected");
  app.listen(process.env.PORT || PORT, () => {
    console.log(`server is started ${PORT}`);
  });
});
