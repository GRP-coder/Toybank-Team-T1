import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    skills: [String],
    message: String,
    taskType: {
        type: String,
        enum: ['virtual', 'physical', 'public relation', 'support'],
        default: 'virtual'
      },
    duration :  Number,
    execution: String,
    location:String,
    executionTime:String, 
    requested: String,
    created: String,
    assigned : {type :Boolean, default : false},
    completed : {type :Boolean, default : false},
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const PostTask = mongoose.model('PostTask', postSchema);
export default PostTask;

