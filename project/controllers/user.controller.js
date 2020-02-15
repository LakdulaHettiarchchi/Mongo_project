 const mongoose = require('mongoose');
 const User =mongoose.model('User');

 module.exports.register=(req,res,next)=>{
    var user = new User();
    user.fullName = req.body.fullName;
    user.email =req.body.password; 
    user.password =req.body.password;
    user.save((err,doc)=>{
        if(!err)
         res.send(doc);
         
     });
 //console.log('inside register fu.');
}
