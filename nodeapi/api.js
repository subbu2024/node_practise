const express = require("express");
const app = express();
 const postServer = require('./routes/route');
 const dotenv = require('dotenv');
  const mongoose = require('mongoose');
  const bodyParser = require("body-parser");
 const expressValidator = require('express-validator');

  dotenv.config();

 //db
 mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected "))

 mongoose.connection.on('error',err =>{

    console.log(`MONGO Coneection Error ${err.message}`);
 })   

app.use("/",postServer)

app.use(bodyParser.json());
app.use(expressValidator());
 const port = process.env.PORT || 8000;
  app.listen(port,()=> console.log("Server Running"));

