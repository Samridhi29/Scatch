const mongoose = require("mongoose");
// const dbgr = require("debug")("development:mongoose");
// const config = require("config");

mongoose
//   .connect(`${config.get("MONGODB_URI")}/scatch`)
  .connect("mongodb://127.0.0.1:27017/scatch")
  .then(function () {
    console.log("connected");
  })
  .catch(function (err) {
    console.log(err);
  });

module.exports = mongoose.connection;