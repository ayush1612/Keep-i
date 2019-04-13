var mongoose= require("mongoose");

var newIssueSchema= new mongoose.Schema({
    text:String,
    id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"newIssue"
    }
})

module.exports= mongoose.model("Issue",newIssueSchema);