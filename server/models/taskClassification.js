import mongoose from "mongoose";

const taskInSchema = mongoose.Schema({
    taskName : {type : String},
    description : {type: String},
    
})

const taskClassificationSchema = mongoose.Schema({
    name : {type: String},
    locations : {type : [String]},
    description : {type: String},
    skillSet : {
        type : [String],
   },
   tasks : {type : [taskInSchema] }

})

const TaskClassification =  mongoose.model("TaskClassifications", taskClassificationSchema);
export default TaskClassification;