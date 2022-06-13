import Tasks from '../models/tasks.js'

export const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find();

        

        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}