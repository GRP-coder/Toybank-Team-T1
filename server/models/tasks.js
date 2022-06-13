import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
     name : {type: String},
     startTime : {type : Date},
     duration : {type: Number},
     location : {type : String},
     description : {type: String},
     classification : {type : String},
     maxRequest : {type: Number},
     assigned : {
          type : [String], // id of user
          default : []
     },
     requested : {
          type : [String],
          default : []
     },
     done : {
          type : [String],
          default : []
     },
     skillSet : {
          type : [String],
     }


});

const Tasks =  mongoose.model("Tasks", taskSchema);
export default Tasks;