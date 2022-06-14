import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
import {   getUser } from '../../../../../actions/auth';

const user = JSON.parse(localStorage.getItem('profile'));

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.tasks);
  const classes = useStyles();
  const dispatch = useDispatch();
  

  const noReqPost = [];

  posts.forEach(post => {
    if(post.requested !== '' && !(post.assigned)) noReqPost.push(post);
  });

  return (
    !noReqPost.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        

        {noReqPost.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={4}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
