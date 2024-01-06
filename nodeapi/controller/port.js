const Post = require("../model/post");

exports.getServer = (req,res)=>{

  // res.json({
  //   posts:[{title:'First POSt '},{title:'Second POSt '}]

  //  });

  const post = Post.find().select("_id").then((posts)=>{
     res.status(200).json({posts:posts})
  })
      }

exports.createPost = (req,res) =>{
  const post = new Post(req.body);
  //console.log("Creating POST ",post );

  
  post.save()
  .then(result => {
    res.status(200).json({
      post: result
    });
  })
  .catch(err => {
    res.status(400).json({
      error: err
    });
  });

}

