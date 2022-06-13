import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import {useSelector} from 'react-redux';
import moment from 'moment';
// material
import { Grid, Button, Container, Stack, Typography, Box } from '@mui/material';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../../sections/@dashboard/blog';


import { AccountProfile } from '../../components/account/account-profile';
import { AccountProfileDetails } from '../../components/account/account-profile-details';

// mock
import POSTS from '../../_mock/blog';

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

export default function Profile() {

  const user = JSON.parse(localStorage.getItem('profile'))
 

  return (
    <Page title="Dashboard: User Profile">
      <Container>
      <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          User 
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
       
      </Container>
    </Page>
  );
}
