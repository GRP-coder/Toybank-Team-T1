import React, {useState , useEffect} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CheckCircle from '@mui/icons-material/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';
import Cancel from '@mui/icons-material/Cancel';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';
import { useDispatch , useSelector} from 'react-redux';

import {deletePost, requestPost, assignPost, donePost } from '../../../../../../actions/tasks';
import {   getOneUser } from '../../../../../../actions/auth';
import useStyles from './styles';


const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();

  const cancelHandle = async () => {
    const p = await dispatch(requestPost(post._id, {uid : ''}))
    const q = await dispatch(assignPost(post._id, {assigned : false}))
    navigate('/dashboard');
    navigate('/dashboard/taskassigned')
  }

  const doneTaks = async () =>{
    const q = await dispatch(donePost(post._id, {completed : true}))
    navigate('/dashboard');
    navigate('/dashboard/taskassigned')
  }

    
  useEffect(async () => {
    const p = await dispatch(getOneUser(post.requested));
  }, [dispatch, post._id]);

  const userReq =  useSelector((state1) => state1.auth);
  

  return (
    <Card sx={{ position: 'relative' }} className={classes.card} style = {{marginTop : '20px'}}>
      <CardMedia className={classes.media}  />
      <div className={classes.overlay} style ={{marginTop : '30px'}}>
        <Typography variant="h5" style={{fontWeight:'bold'}}>{post.title}</Typography>
        <Typography variant="h6" style={{ color:"rgb(7, 40, 133)"}}>Location : {post.location}</Typography>
        <Typography variant="body2" style={{color:"red" }}>Posted {moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <button style = {{color : 'yellow', background : 'blue', borderRadius: '5px', textAlign: 'center', height:'40px', width:'100px'}} onClick={doneTaks}>
        <CheckCircle fontSize="medium"  />
        <strong>
          DONE
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
        <Typography variant="body2" color="primary" marginTop ="10px"><strong>Requested By : {userReq.name} </strong></Typography>
        <Typography variant="body2" color="primary" ><strong>Skills : {userReq.skills}, {userReq.languages}</strong> </Typography>
        <Typography variant="body2" color="primary" ><strong>Email : {userReq.email}</strong> </Typography>
      </div></div>
       
      <CardContent>
      Description:
        <Typography variant="body2" color="textSecondary" component="p"> {post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <button style = {{color : 'blue', background : 'white', borderRadius: '5px' , textAlign: 'right'}} onClick={() => dispatch(deletePost(post._id))}>
        <DeleteIcon fontSize="medium" />
        </button>
        <button style = {{color : 'blue', background : 'white', borderRadius: '5px' , textAlign: 'right'}} onClick={cancelHandle}>
        <Cancel fontSize="medium" />
        </button>
        {/* <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button> */}
      </CardActions>
    </Card>
  );
};

export default Post;
