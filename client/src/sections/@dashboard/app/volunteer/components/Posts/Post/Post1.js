import React from 'react';
import { useNavigate} from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';
import RequestPage from '@mui/icons-material/RequestPage';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { requestPost } from '../../../../../../../actions/tasks';
import useStyles from './styles';



const Post = ({ post, setCurrentId }) => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('profile'));

 
  

  const dispatch = useDispatch();
  const classes = useStyles();

  const requestHandle = async () => {
    const p = await dispatch(requestPost(post._id, {uid : user.result._id}))
    navigate('/dashboard');
    navigate('/dashboard/app')
  }

  return (
    <Card sx={{ position: 'relative' }} className={classes.card} >
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
    <CardActions className={classes.cardActions}>
    <button style = {{color : 'blue', background : 'white', borderRadius: '5px' , textAlign: 'center', height:'40px', width:'120px'}} onClick={requestHandle}>
      <RequestPage fontSize="medium" />
      <strong>
      REQUEST
      </strong>
      </button>
      
    </CardActions>
  </Card>
    
      
    
  );
};

export default Post;
