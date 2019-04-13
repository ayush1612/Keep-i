var mongoose= require("mongoose");

var issueSchema=new mongoose.Schema({
   issues:[
       {
           type: mongoose.Schema.Types.ObjectId,
           ref:"Issue"
       }
   ] 
})