const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/dbConnection");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

connectDB();

app.use("/dragons", require("./routes/api/dragons"));

app.use("/colorschemes", require("./routes/api/colorSchemes"));

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
  app.listen(3001, () => console.log("the server is running on port 3001"));
});