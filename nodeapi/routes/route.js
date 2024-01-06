const express = require("express");
const router = express.Router();
const getController = require("../controller/port");

const postContent = require("../controller/port");

// const errMag = require("../validator/index")



  router.get('/', getController.getServer);

  // router.post('/post', errMag.createValidator,postContent.createPost);

  router.post('/post',postContent.createPost);

module.exports = router;

// exports.getServer = (req,res)=>{

//     res.json({
//      posts:[{title:'First POSt '},{title:'Second POSt '}]

//     });
//   }