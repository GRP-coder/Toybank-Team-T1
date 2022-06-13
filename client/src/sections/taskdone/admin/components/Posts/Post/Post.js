import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import {   deletePost } from '../../../../../../actions/tasks';
import useStyles from './styles';


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card sx={{ position: 'relative' }} className={classes.card} style = {{marginTop : '20px'}}>
      <CardMedia className={classes.media}  />
      <div className={classes.overlay} style ={{marginTop : '30px'}}>
        <Typography variant="h5" style={{fontWeight:'bold'}}>{post.title}</Typography>
        <Typography variant="h6" style={{ color:"rgb(7, 40, 133)"}}>Location : {post.location}</Typography>
        <Typography variant="body2" style={{color:"red" }}>Posted {moment(post.createdAt).fromNow()}</Typography>
      </div>
      
      <div className={classes.details}>
       <div>
      <Typography variant="body2" color="textSecondary" >Estimated Task Duration : {post.duration} Hrs</Typography>
      <Typography variant="body2" color="textSecondary" >Execution Task Type : {post.taskType}</Typography>
      <Typography variant="body2" color="textSecondary" >Execution Task Date : {post.execution}</Typography>
      <Typography variant="body2" color="textSecondary" >Execution Task Time : {post.executionTime}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">Skills: {post.skills.map((tag) => `${tag}, `)}</Typography>
      </div></div>
       
      <CardContent>
      Description:
        <Typography variant="body2" color="textSecondary" component="p"> {post.message}</Typography>
      </CardContent>
     
    </Card>
  );
};

export default Post;
