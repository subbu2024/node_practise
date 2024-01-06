// exports.createValidator = (req,res,next)=>{
//  req.check("title","write a title").noEmpty();
//  req.check("title","Title must be 4 letters").isLenght({
//    min:4,
//    max:150
//  })
//   req.check("body","Body Required").noEmpty();

//   const errors = req.validationError();
       
//     if(errors){
//    const firstError = errors.map(err=> err.msg[0]);
//      return res.status(400).json({err:firstError})

//     }
//     next();

// }