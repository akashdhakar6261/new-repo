const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL;
mongoose
  .connect(dbUrl)
  .then((res) => {
    console.log("succesfully connection");
  })

  
  .catch((err) => {
    console.log("failed connection");
  });
