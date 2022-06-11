import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import {   deletePost } from '../../../../../../../actions/tasks';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media}  />
      <div className={classes.overlay}>
        <Typography variant="h4" style={{fontWeight:'bold'}}>{post.title}</Typography>
        <Typography variant="h6" style={{ color:"rgb(179 133 4)"}}>Location : {post.location}</Typography>
        <Typography variant="body2" style={{color:"red" }}>Posted {moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'Black' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" />Modify</Button>
      </div>
      <div className={classes.details}>
       <div>
      <Typography variant="body2" color="textSecondary" >Estimated Task Duration : {post.Duration} Hrs</Typography>
      <Typography variant="body2" color="textSecondary" >Execution Task Type : {post.taskType}</Typography>
      <Typography variant="body2" color="textSecondary" >Execution Task Date : {post.execution}</Typography>
      <Typography variant="body2" color="textSecondary" >Execution Task Time(HH-MM) : {post.executionTime}</Typography>
        <Typography variant="body2" color="textSecondary" component="h2">Skills: {post.skills.map((tag) => `${tag}, `)}</Typography>
      </div></div>
       
      <CardContent>
      Description:
        <Typography variant="body2" color="textSecondary" component="p"> {post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
