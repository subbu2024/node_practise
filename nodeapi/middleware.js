const express = require('express');
const app =express();
const {getServer} = require('./routes/route')
const morgan = require("morgan");


const middleWareMethod = (req,res,next)=>{

    console.log("Middlware Working");
    next();
}
app.use(middleWareMethod);

app.use(morgan("dev"));


 app.get('/',getServer);

const port =8080;
 app.listen(port,()=>console.log(`Server Listening ${port}`));

 
