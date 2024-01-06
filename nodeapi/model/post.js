const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title:{
    type: String,
    required:'Title Required',
    minlength:4,
    maxlength:150
  },
  body:{
    type: String,
    required:'Body Required',
    minlength:4,
    maxlength:150
  }

})

module.exports = mongoose.model("Post",postSchema)