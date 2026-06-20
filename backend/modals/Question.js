const mongoose=require("mongoose");

const questionSchema=newmongoose.Schema({
    session:{type:mongoose.Schema.Types.ObjectId,ref:"Session"},
    question:String,
    answer:String,
    note:String,
    isPinned:{type:Boolean, dafault:false},
},{timestamps:true});

module.exports=mongoose.model("Question",questionSchema);