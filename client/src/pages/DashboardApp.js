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
import App1 from '../sections/@dashboard/app/volunteer/App'
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

  const[ttype, setttype] = useState('suggested');

  const[toshow, settoShow] = useState(' Suggested For You');

  const handleA = () =>{
    setttype('suggested');
    settoShow(' Suggested For You');
  }

  const handleB = () =>{
    setttype('physical')
    settoShow('Physical Involvment');
  }

  const handleC = () =>{
    setttype('virtual')
    settoShow('Virtual Involvment');
  }

  const handleD = () =>{
    setttype('support')
    settoShow('Support Related');
  }

  const handleE = () =>{
    setttype('public')
    settoShow('Public Relation');
  }
  
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
          <button onClick = {handleA} style ={{width:'100% ' , borderRadius : '20px'}}>
            <AppWidgetSummary title="Suggested For You"  icon={'ant-design:heart-filled'} onClick = {handleA}/>
            </button>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
          <button onClick = {handleB} style ={{width:'100% ' , borderRadius : '20px'}}>
            <AppWidgetSummary title="Physical"  color="info" icon={'ant-design:copy-outlined'}/>
            </button>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
          <button onClick = {handleC} style ={{width:'100% ' , borderRadius : '20px'}}>
            <AppWidgetSummary title="Virtual"  color="warning" icon={'ant-design:chrome-outlined'} />
            </button>
          </Grid>

          <Grid item xs={12} sm={6} md={2} >
          <button onClick = {handleD} style ={{width:'100% ' , borderRadius : '20px'}}>
            <AppWidgetSummary title="Support"  color="error" icon={'ant-design:phone-filled'} />
          </button>
          </Grid>

          <Grid item xs={12} sm={6} md={2} >
          <button onClick = {handleE} style ={{width:'100% ' , borderRadius : '20px'}}>
            <AppWidgetSummary title="Public"  color="info" icon={'ant-design:usergroup-add-outlined'}  />
            </button>
          </Grid>

        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom marginTop = "30px">
              Tasks {toshow}
            </Typography>
            
          </Stack>
          <Stack>
          <App1 ttype = {ttype}/>
          </Stack>

          {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
            <BlogPostsSearch posts={POSTS} />
            <BlogPostsSort options={SORT_OPTIONS} />
          </Stack>

          <Grid container spacing={3}>
            {POSTS.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </Grid> */}
          
      </Container>
      </Grid>
      </>
        )}

        

       
      </Container>
    </Page>
  );
}
