const express = require("express");
const app = express();
const cors = require("cors");
const axios = require('axios');
const jsdom = require("jsdom");

app.use(cors());
app.use(express.json());

//todo: error response

app.get("/loaddragon/:id", (req, res) => {
  axios
  .get(`https://www1.flightrising.com/dragon/${req.params.id}`)
  .then(response => {
    console.log(`statusCode: ${response.status}`);
    let doc = new jsdom.JSDOM(response.data);
    let dragonBio = [...doc.window.document.querySelectorAll(".dragon-profile-stat-icon-value")].map((item) => item.textContent.replace(/(\r\n|\n|\r)/gm, "").trim().split(" ")[0]);
    let dragonImage = [...doc.window.document.querySelector("#dragon-profile-dragon-frame").childNodes][1].src;
    console.log(dragonImage)
    res.json({bio: dragonBio, img: dragonImage});
  })
  .catch(error => {
    console.error(error);
  });
});


app.post("/addscheme", (req, res) => {
    console.log(req.body)
})

app.listen(3001, () => {
    console.log("the server is running on port 3001")
});