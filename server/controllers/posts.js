import express from 'express';
import mongoose from 'mongoose';
import PostTask from "../models/postTask.js";



// export const getPosts = async(req, res) => {
//     try {
//         const postTasks = await PostTask.find();

//         console.log(postTasks);

//         res.status(200).json(postTasks);
//     } catch (error) {
//         res.status(404).json({message: error.message});
//     }
    
// }

// export const createPost = async(req, res) => {
//     const post = req.body;

//       const newPostTask = new PostTask({ ...post, creator : req.userId, createdAt: new Date().toISOString() })

//         try {
//             await newPostTask.save();

//             res.status(201).json(newPostTask );
//         } catch (error) {
//             res.status(409).json({ message: error.message });
//         }
// }

// export const updatePost = async(req, res) =>{
//     const {id : _id} = req.params;

//     const post = req.body;

//     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with the Id provided");

//    const updatedPost= await PostTask.findByIdAndUpdate(_id, post, { new: true } );

//    res.json(updatedPost);

// }

// export const deletePost = async(req, res) =>{
//     const { id } = req.params;
//     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with the Id provided");

//     await PostTask.findByIdAndRemove(id);

//     res.json({message: 'Post deleted Successfully'});
// }

// export const  likePost = async(req, res) =>{
//     const { id } = req.params;

//     if(! req.userId) return res.json({message : 'Unauthenticated'});
    
//     if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with the Id provided");

//     const post = await PostTask.findById(id);

//     const index = post.likes.findIndex((id) => (id) === String(req.userId));

//     if(index === -1){
//         post.likes.push(req.userId);
//     }
//     else{
//         post.likes = post.likes.filter((id) => id !== String(req.userId));
//     }

//     const updatedPost = await PostTask.findByIdAndUpdate(id , post, {new : true});

//     res.json(updatedPost);
// }

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostTask.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostTask.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title,
        skills,
        message, duration,
        execution,location,executionTime ,taskType,
        requested,
        created,
        assigned,
        completed} = req.body;

    const newPostMessage = new PostTask({
        title,
        skills,
        message, 
        duration, 
        execution,
        location,
        executionTime,
        taskType,
        requested,
        created,
        assigned,
        completed,

    })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const {  title,
        skills,
        message, duration,
        execution,location,executionTime ,taskType,
        requested,
        created,
        assigned,
        completed} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = {  title,
        title,
        skills,
        message, duration,
        execution,location,executionTime ,taskType,
        requested,
        created,
        assigned,
        completed, _id: id };

    await PostTask.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostTask.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await PostTask.findById(id);

    const updatedPost = await PostTask.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);
}


export default router;