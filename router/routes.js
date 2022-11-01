const express = require("express");
const router = express.Router();
const {createtask,gettasks} = require("../controllers/subtask");


router.route("/signin/:email&:password").get(gettasks);

router.route("/signup").post(createtask);

module.exports = router;