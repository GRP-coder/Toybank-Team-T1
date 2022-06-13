import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts1 from './components/Posts/Posts1';

import { getPosts } from '../../../actions/tasks';
import useStyles from './styles';


const App = (ttype) => {
  
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
              <Posts1 setCurrentId={setCurrentId} ttype = {ttype}/>
            </Grid>
            
           
          </Grid>
        </Container>
     
    </Container>
  );
};

export default App;
