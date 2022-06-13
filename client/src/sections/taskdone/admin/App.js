import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';

import { getPosts } from '../../../actions/tasks';
import useStyles from './styles';


const App = () => {
  
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container >
       
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            
           
          </Grid>
        </Container>
     
    </Container>
  );
};

export default App;
