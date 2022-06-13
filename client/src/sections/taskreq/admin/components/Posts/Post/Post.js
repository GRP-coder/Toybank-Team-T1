import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import Cancel from '@mui/icons-material/Cancel';
import Done from '@mui/icons-material/Done';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import {   deletePost, requestPost, assignPost } from '../../../../../../actions/tasks';
import useStyles from './styles';


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('profile'))

  const requestHandle = async () => {
    const p = await dispatch(requestPost(post._id, {uid : ''}))
    navigate('/dashboard');
    navigate('/dashboard/taskrequested')
  }

  const assignHandle = async () => {
    const p = await dispatch(assignPost(post._id, {assigned : true}))
    navigate('/dashboard');
    navigate('/dashboard/taskrequested')
  }

  return (
    <Card sx={{ position: 'relative' }} className={classes.card} style = {{marginTop : '20px'}}>
      <CardMedia className={classes.media}  />
      <div className={classes.overlay} style ={{marginTop : '30px'}}>
        <Typography variant="h5" style={{fontWeight:'bold'}}>{post.title}</Typography>
        <Typography variant="h6" style={{ color:"rgb(7, 40, 133)"}}>Location : {post.location}</Typography>
        <Typography variant="body2" style={{color:"red" }}>Posted {moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <button style = {{color : 'yellow', background : 'blue', borderRadius: '5px', textAlign: 'center', height:'40px', width:'100px'}} onClick={assignHandle}>
        <Done fontSize="medium"  /> 
        <strong>
        ASSIGN
        </strong>
        </button>
         {/* <Button style={{ color: 'Black' }} size="small" onClick={() => setCurrentId(post._id)}></Button> */}
        
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
      <CardActions className={classes.cardActions}>
      <button style = {{color : 'blue', background : 'white', borderRadius: '5px' , textAlign: 'right'}} onClick={() => dispatch(deletePost(post._id))}>
        <DeleteIcon fontSize="medium" />
        </button>
        <button style = {{color : 'blue', background : 'white', borderRadius: '5px' , textAlign: 'right'}} onClick={requestHandle}>
        <Cancel fontSize="medium" />
        </button>
        {/* <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button> */}
      </CardActions>
    </Card>
  );
};

export default Post;
