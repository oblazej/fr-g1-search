const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017/fr-genone-project";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use("/dragons", require("./routes/api/dragons"));

app.use("/colorschemes", require("./routes/api/colorSchemes"));

app.listen(3001, () => {
  console.log("the server is running on port 3001")
});