let mongoose = require("mongoose");

let dataschema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "must provide a name"],
    maxlength: [20, "name cannot be larger then 20 characters"],
  },
  lastname: {
    type: String,
    required: [true, "must provide a lastname"],
    maxlength: [20, "lastname cannot be larger then 20 characters"],
  },
  city: {
    type: String,
    required: [true, "must provide a city"],
    maxlength: [20, "city cannot be larger then 20 characters"],
  },
  emailaddress: {
    type: String,
    required: [true, "must provide a email"],
    maxlength: [50, "email cannot be larger then 50 characters"],
  },
  postalcode: {
    type: Number,
    required: [true, "must provide a postalcode"],
    min: [100000, "invalid postal code"],
    max: [800000, "invalid postal code"],
  },
  region: {
    type: String,
    required: [true, "must provide a region"],
    maxlength: [50, "region cannot be larger then 50 characters"],
  },
  streetaddress: {
    type: String,
    required: [true, "must provide a street"],
    maxlength: [50, "street cannot be larger then 50 characters"],
  },
  // gender: {
  //   type: String,
  //   enum: ["men", "women"],
  // },
  // age: {
  //   type: Number,
  //   max: [45, "maximum age is 45"],
  //   min: [18, "minimum age is 18"],
  //   required: [true, "age must be provided"],
  // },
  date: {
    type: Date,
    default: new Date(),
  },
});

let schema1 = mongoose.model("Data", dataschema);

module.exports = { schema1 };
