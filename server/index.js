const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "colorSchemes"
});

app.use(cors());
app.use(express.json());

app.post("/addscheme", (req, res) => {
    console.log(req.body)
})

app.listen(3001, () => {
    console.log("the server is running on port 3001")
});