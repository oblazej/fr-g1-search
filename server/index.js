const express = require("express");
const app = express();
const cors = require("cors");
const axios = require('axios');
const jsdom = require("jsdom");

app.use(cors());
app.use(express.json());

axios
  .get('https://www1.flightrising.com/scrying/predict/50678302')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    let doc = new jsdom.JSDOM(res.data);
    console.log(doc.window.document.querySelector("#dragon-image"));
  })
  .catch(error => {
    console.error(error);
  });





app.post("/addscheme", (req, res) => {
    console.log(req.body)
})

app.listen(3001, () => {
    console.log("the server is running on port 3001")
});