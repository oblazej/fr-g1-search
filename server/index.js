const express = require("express");
const app = express();
const cors = require("cors");
const axios = require('axios');
const jsdom = require("jsdom");
const mongoClient = require("mongodb").MongoClient;

app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017";
const dbname = "fr-genone-project";

mongoClient.connect(url, {}, (error, client) => {
  if(error) {
    console.log("err");
  }

  const db = client.db(dbname);
  // db.collection("colorSchemes").insertOne({
  //   primaryColor: [0, 1],
  //   secondaryColor: [1, 3],
  //   tertiaryColor: [3],
  //   element: ["water"]
  // }, (error, result) => {
  //   if(error) {
  //     console.log("failed", error)
  //   }

  //   console.log(result)
  // })

  db.collection("colorSchemes").find({
    primaryColor: [0, 1]
  }).toArray((error, results) => {
    console.log(results)
  })
  console.log("dziala")
});



//todo: error responses
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