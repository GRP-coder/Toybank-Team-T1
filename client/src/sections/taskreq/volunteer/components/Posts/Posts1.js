import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post1 from './Post/Post1';
import useStyles from './styles';

const Posts1 = ({ setCurrentId }) => {
  
  const posts = useSelector((state) => state.tasks);
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem('profile'));

  

  const noReqPost = [];

  posts.forEach(post => {
    if(post.requested === user.result._id) noReqPost.push(post);
  });

  
 


  return (
    !noReqPost.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3} style = {{ position: 'relative',}}>
        {noReqPost.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={4}>
            <Post1 post={post} setCurrentId={setCurrentId} />
            
            
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts1;
