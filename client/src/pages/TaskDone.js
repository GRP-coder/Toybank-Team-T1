import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import {useSelector} from 'react-redux';
import moment from 'moment';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
import App from '../sections/taskdone/admin/App'
import App1 from '../sections/taskdone/volunteer/App'
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function Blog() {

  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <Page title="Dashboard: Task Completed">
      <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>

        {(user.result.role === 'admin')?(
                'TASKS COMPLETED'
            ):(
              'TASKS COMPLETED'
            )}
          
      </Typography>
      <div>
              {(user.result.role === 'admin')?(
                  <App/>
              ):(
                <App1/>
              )}
      </div>
      </Container>
    </Page>
  );
}
