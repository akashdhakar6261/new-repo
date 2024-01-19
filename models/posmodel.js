const mongoose = require("mongoose");
//const AutoIncrement = require("mongoose-sequence")(mongoose);

const Schema = new mongoose.Schema({
  invoiceId: {
    type: String,
    default:0
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  
  time: {
    type: String,
  },
});

// Schema.plugin(AutoIncrement, { id: "invoiceId_seq", inc_field: "invoiceId", start_seq: 1000 });

const posdata = mongoose.model("posdata", Schema);

module.exports = posdata;
