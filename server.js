const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const port = process.env.PORT || 5005;
const cors = require("cors");
require("./db/connection");
const router = require("./routers/index");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, (re, res) => {
  console.log("server listening on the 5005");
});
