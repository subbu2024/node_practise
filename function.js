const fs = require("fs");

const fileName = "test.txt";

const errHandler = err =>console.log(err);

const dataHandler = data => console.log(data.toString());


fs.readFile(fileName,(err,data)=>{
  if(err){

    errHandler(err);
  }
   dataHandler(data);

})