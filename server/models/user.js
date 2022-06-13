import mongoose from "mongoose";

const userSchema = mongoose.Schema({
     name : {type : String, required : true},
     email: {type : String, required : true},
     password: {type : String, required : true},
     phone:{type:Number},
     address: {type: String},
     role:  {type: String},
     skills : {type: [String], default : []},
     languages: {type: [String], default : []},
     assignedTasks : {type: [String], default : []},
     requestedTasks : {type: [String], default : []},
     taskHistory : {type: [String], default : []},
     location : {type: [String], default : []},
     verified: {Type : Boolean , default : false},
     
});

export default mongoose.model("User", userSchema);