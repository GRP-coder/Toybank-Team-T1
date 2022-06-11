import express from 'express';
import mongoose from 'mongoose';
import TaskClassification from "../models/taskClassification.js";

export const getTaskClassifications = async(req, res) => {
    try {
        const taskClassifications = await TaskClassification.find();

        console.log(taskClassifications);

        res.status(200).json(taskClassifications);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}