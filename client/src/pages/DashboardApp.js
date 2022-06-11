import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { useDispatch } from 'react-redux';
import { Link , useLocation,useNavigate} from 'react-router-dom';

import decode from 'jwt-decode'
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography,Stack, Box } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';
// sections
import AppWidgetSummary from '../sections/@dashboard/app/AppWidgetSummary';
import App from '../sections/@dashboard/app/admin/App'
import Posts from '../sections/@dashboard/app/admin/components/Posts/Posts'
import Form from '../sections/@dashboard/app/admin/components/Form/Form'

//-----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logOut = () => {
    dispatch({type: 'LOGOUT'});
    navigate('/');
    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;
    if(token){
      const decodedToken = decode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()){
        logOut();
      }
    }


    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back {user?.result.name}
        </Typography>

        {user?.result.role === 'admin'?(
           <App/>
            
        ):(
          <>
          <Typography variant="h4" sx={{ mb: 5 }}>
          All Classes of Tasks Available
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummary title="Suggested For You" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetSummary title="Physical" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetSummary title="Virtual" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetSummary title="Support" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppWidgetSummary title="Public" total={234} color="info" icon={'ant-design:bug-filled'} />
          </Grid>

        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom marginTop = "30px">
              TASKS SUGGESTED FOR YOU
            </Typography>
            
          </Stack>

          <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
            <BlogPostsSearch posts={POSTS} />
            <BlogPostsSort options={SORT_OPTIONS} />
          </Stack>

          <Grid container spacing={3}>
            {POSTS.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
      </Container>
      </Grid>
      </>
        )}

        

       
      </Container>
    </Page>
  );
}
