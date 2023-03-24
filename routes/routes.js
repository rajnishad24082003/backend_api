let express = require("express");
let router = express.Router();
let {
  getAllData,
  getSingleData,
  createData,
  updateDataPatch,
  updateDataPut,
  deleteData,
} = require("./callbacks.js");

router.get("/reqname/", getAllData);
router.get("/reqname/:id", getSingleData);
router.post("/reqname/", createData);
router.delete("/reqname/:id", deleteData);
router.patch("/reqname/:id", updateDataPatch); //parcial update
router.put("/reqname/:id", updateDataPut); //overwrite

module.exports = router;
