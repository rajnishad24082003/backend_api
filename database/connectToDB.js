let mongoose = require("mongoose");

let connectToDB = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url);
};
module.exports = connectToDB;
