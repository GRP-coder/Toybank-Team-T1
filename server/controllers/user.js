import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import express from 'express';
import mongoose from 'mongoose';

import User from '../models/user.js';

const router = express.Router();

export const signin = async (req, res) => {
    const {email, password} = req.body; 

    try {
        const existingUser = await User.findOne({email});

        if(! existingUser) return res.status(404).json({message : "User Doesn't exist."});

        const isPasswordCorrect = await  bcrypt.compare(password, existingUser.password);

        if(! isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials"});

        const token = jwt.sign({email: existingUser.email, id : existingUser._id, }, 'test', {expiresIn: "1h"});

        res.status(200).json({result: existingUser, token});
        
    } catch (error) {
        res.status(500).json({message : "Something Went Wrong"});
;    }
}

export const signup = async (req, res) => {

    const {email, password,  firstName, lastName,address,phone,role,skills,languages,assignedTasks,requestedTasks,taskHistory,location,verified}  = req.body;
    
    try {
        const existingUser = await User.findOne({email});

        if(existingUser) return res.status(400).json({message : "User Already exist."});

        //if(password !== confirmPassword) res.status(400).json({message : "Passwords Do not Match"});

        const hashPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password : hashPassword, name: `${firstName} ${lastName}`, address,role,phone,skills,languages,assignedTasks,requestedTasks,taskHistory,location,verified});

        const token = jwt.sign({email: result.email, id : result._id, }, 'test', {expiresIn: "1h"});
        
        res.status(200).json({result, token});
        
    } catch (error) {
        res.status(500).json({message : "Something Went Wrong"});
    }
    
}


export const getUser = async (req, res) => {
    try {
        const postUser = await User.find();
        
        res.status(200).json(postUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const verifyUser = async (req, res) => {
    const { id } = req.params;
    const { email, password,  firstName, lastName,address,phone,role,skills,
        languages,assignedTasks,requestedTasks,taskHistory,location,verified} = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { email, password,  firstName, lastName,address,phone,role,skills,
        languages,assignedTasks,requestedTasks,taskHistory,location,verified, _id: id };

    await User.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const getOneUser = async (req, res) => {
    try {
        const {id} = req.params;

        const postUser = await User.findById(id);
        console.log(postUser);
        res.status(200).json(postUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}





export default router;