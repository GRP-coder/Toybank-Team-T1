import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post1 from './Post/Post1';
import useStyles from './styles';

const Posts1 = ({ setCurrentId , ttype}) => {
  
  const posts = useSelector((state) => state.tasks);
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem('profile'));

  

  const noReqPost = [];

  posts.forEach(post => {
    if(post.requested === '') noReqPost.push(post);
  });

  const noReqPostF = [];
  
if(ttype.ttype !== 'suggested'){

 noReqPost.forEach(post => {
    if(post.taskType === ttype.ttype) noReqPostF.push(post);
  });
}
else{
  noReqPost.forEach(post => {
    post.skills.forEach(skill =>{
     if(user.result.skills.indexOf(skill) !== -1 || user.result.languages.indexOf(skill) !== -1) noReqPostF.push(post);
    })
  });
}


  return (
    !noReqPostF.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3} style = {{ position: 'relative',}}>
        {noReqPostF.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={4}>
            <Post1 post={post} setCurrentId={setCurrentId} />
            
            
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts1;
