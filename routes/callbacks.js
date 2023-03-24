let { schema1 } = require("../database/schema");
let { schema2 } = require("../database/schema");

let getAllData = async (req, res) => {
  try {
    let datas = await schema1.find({});
    if (!datas) {
      return res.status(200).json({ message: "no objects found" });
    }
    res.status(200).json({ datas });
  } catch (error) {
    res.status(500).json({ error });
  }
};
let getSingleData = async (req, res) => {
  try {
    let data = await schema1.findOne({ _id: req.params.id });
    if (!data) {
      return res.status(404).json({ message: "no objects found" });
    }
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
};
let createData = async (req, res) => {
  try {
    let data = await schema1.create(req.body);
    res.status(201).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
};
let updateDataPatch = async (req, res) => {
  try {
    let data = await schema1.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!data) {
      return res.status(404).json({ message: "no objects found" });
    }
    res.status(202).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
};
let updateDataPut = async (req, res) => {
  try {
    let data = await schema1.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
        overwrite: true,
      }
    );
    if (!data) {
      return res.status(404).json({ message: "no objects found" });
    }
    res.status(202).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
};
let deleteData = async (req, res) => {
  try {
    let data = await schema1.findOneAndDelete({ _id: req.params.id });
    if (!data) {
      return res.status(404).json({ message: "no objects found" });
    }
    res.status(202).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
};
let uploadFile = async (req, res) => {
  try {
    res.send("file uploaded");
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllData,
  getSingleData,
  createData,
  updateDataPatch,
  updateDataPut,
  deleteData,
  uploadFile,
};
