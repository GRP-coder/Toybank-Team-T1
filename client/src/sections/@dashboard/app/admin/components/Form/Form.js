import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper ,Select, InputLabel, MenuItem, handleChange, Container, Grid, Box, ListItemText, ListItemIcon, ListItemButton, List} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../../../../../actions/tasks';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title :'',
    skills :'',
    message :'', 
    duration : '',
    execution:'',
    location: '',
    executionTime:'',
    requested:'',
    created: '',
    assigned : false,
    completed: false,
    taskType:'' });
  const post = useSelector((state) => (currentId ? state.tasks.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ 
    title :'',
    skills :'',
    message :'', 
    duration :'',
    execution:'',
    location:'',
    executionTime:'' ,
    created:'',
    requested:'',
    taskType:'' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const commonStyles = {
    bgcolor: 'blue',
    m: 1,
    borderColor: 'primary',
    width: '90%',
    height: '2rem',
  };

  return (
    <Container >
     
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Post The Task'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        
        <TextField name="duration" variant="outlined" label="Duration(HRS)" fullWidth value={postData.duration} onChange={(e) => setPostData({ ...postData,duration: e.target.value })} />
        <TextField name="execution" variant="outlined" label="Execution Date(DD-MM-YYYY)" fullWidth value={postData.execution} onChange={(e) => setPostData({ ...postData,execution: e.target.value })} />
        <TextField name="execution" variant="outlined" label="Execution Time(HH-MM AM/PM)" fullWidth value={postData.executionTime} onChange={(e) => setPostData({ ...postData,executionTime: e.target.value })} />
        <TextField name="location" variant="outlined" label="Location" fullWidth value={postData.location} onChange={(e) => setPostData({ ...postData,location: e.target.value })} />
        <TextField name="taskType" variant="outlined" label="Task Type(Virtual / Physical)" fullWidth value={postData.taskType} onChange={(e) => setPostData({ ...postData,taskType: e.target.value })} />
        

        <TextField name="skills" variant="outlined" label="Skills (coma separated)" fullWidth value={postData.skills} onChange={(e) => setPostData({ ...postData, skills: e.target.value.split(',') })} />
        <TextField name="message" variant="outlined" label="Description" fullWidth multiline rows={2} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
       
       <div >
                      <FileBase
                        type = "file"
                        multiple = {false}
                    />
       </div>

        <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
             <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <button type = "submit" style={{ color: "white", background: "blue", width : "250px", height:"40px", marginTop: "10px" }}>
              <strong>
                SUBMIT
              </strong>
            </button>
            
            <button style={{ color: "white", background: "pink", width : "250px", height:"40px", marginTop: "10px" }} onClick = {clear} >
                <strong>
                CLEAR
                </strong>
            </button>
          
            </Box>
          </Grid>
        </Grid> 
        </Container>
      </form> 
        {/* <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >POST</Button> */}
     
        {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
      
    </Container>
  );
};

export default Form;
