const express = require("express");
const app = express();
const port = 3000 || process.env ;
const userRoutes = require("./router/routes");
const mongocon =  require("./db/connect");
require("dotenv").config();
//middleware
app.use(express.json());

app.use(userRoutes);


const start =async ()=>{
try{
await mongocon(process.env.connectionstring);
app.listen(port,()=>{
    console.log("server is listening")
})
}catch(err){
console.log(err);
}
}

start();
