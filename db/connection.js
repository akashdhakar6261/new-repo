const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/poc-dynamic")
  .then((res) => {
    console.log("succesfully connection");
  })

  
  .catch((err) => {
    console.log("failed connection");
  });
