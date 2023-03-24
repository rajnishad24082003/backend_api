let express = require("express");
let app = express();
let DBroutes = require("./routes/routes.js");
const connectToDB = require("./database/connectToDB");
let notFound = require("./middleware/notfound");
require("dotenv").config();

//middleware
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//routes
app.get("/", (req, res) => {
  res.status(200).send("home page of api");
});
app.use("/api/v1", DBroutes);
app.use("*", notFound);

//server
let port = process.env.PORT || 4000;
let startServer = async () => {
  try {
    let ans = await connectToDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port : ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
startServer();
