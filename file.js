const fs = require("fs");
const fileName = "test.txt";
//Change Detection
//  fs.watch(fileName,()=>console.log("FILE CHANGED"));
   
//Sync Perform

  const fileData =  fs.readFileSync(fileName);
   console.log(fileData.toString());
   console.log("DATA PRINT LAST")

//Async perform
// fs.readFile(fileName,(err,data)=>{
   
//   if(err){
  
//   console.log(err)
//   }
//   console.log(data.toString());

// })

// console.log("DATA PRINT FIRST")