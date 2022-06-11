import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRouters from'./routes/posts.js';
import userRouters from'./routes/users.js';
import taskRouter from './routes/tasks.js';
import taskClassificationRouter from './routes/taskClassifications.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended : true }));

app.use(bodyParser.urlencoded({limit: "30mb", extended : true }));



app.use(cors());

app.use('/posts', postRouters);
app.use('/user', userRouters);
app.use('/tasks', taskRouter);
app.use('/classification', taskClassificationRouter);

app.get('/', (req, res) =>{
    res.send("Hello to TOYBANK API");
});

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {})
.then(() => app.listen(PORT, () => console.log(`Server Running on PORT: ${PORT}`)))
.catch((error) => console.log(error.message));

