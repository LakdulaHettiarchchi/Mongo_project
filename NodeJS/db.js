const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/User',(err)=>{
   
       if(!err)
         console.log('MOngoDB connection succeeed.');
       else
         console.log('Error in DB connection: ' +JSON.stringify(err,undefined,2));  
 });

 module.exports = mongoose;
