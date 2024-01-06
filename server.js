// const http = require("http");
  const express = require("express");
  const app = express();

// const server = http.createServer((req,res) =>{
//    res.end("HAI SERVER THREE EKEVEN");
// })

  app.get('/',(req,res)=>{

   res.send("EXPRESS Working");

  });



  app.listen(3000);