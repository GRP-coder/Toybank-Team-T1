import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
// component
import Iconify from '../../../components/Iconify';
// other imports


import {signin, signup} from '../../../actions/auth';
// ----------------------------------------------------------------------



const Item = styled(Paper)(({ theme }) => ({
  
  
  
  
}));

const handleCheckbox = (e, formik) =>{
  if(e.target.checked) formik.values.languages.push(e.target.value);
  else{
    const index = formik.values.languages.indexOf(e.target.value);
    formik.values.languages.splice(index, 1);
    
  }
  
}

const handleCheckboxSkill = (e, formik) =>{
  if(e.target.checked) formik.values.skills.push(e.target.value);
  else{
    const index = formik.values.skills.indexOf(e.target.value);
    formik.values.skills.splice(index, 1);
    
  }
  
}

const handleCheckboxLocation = (e, formik) =>{
  if(e.target.checked) formik.values.location.push(e.target.value);
  else{
    const index = formik.values.location.indexOf(e.target.value);
    formik.values.location.splice(index, 1);
    
  }
  
}

export default function RegisterForm() {

  const [userType, setUserType] = React.useState('');
  
  const handleChange = (event) => {
    formik.values.role = event.target.value;
      setUserType(event.target.value);
      
      
  };
  

  

  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone:'',
      password: '',
      address: '',
      role: '',
      skills : [],
      languages: [],
      assignedTasks : [],
      requestedTasks : [],
      taskHistory : [],
      location : [],
      verified: false

    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      
      dispatch(signup(formik.values, navigate));

    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

    

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

            <TextField
            fullWidth
            autoComplete="phone"
            type="Number"
            label="Phone Number"
            {...getFieldProps('phone')}
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userType}
              label="Age" 
              onChange={handleChange}
            >
              <MenuItem value="admin">ADMIN</MenuItem>
              <MenuItem value="volunteer">VOLUNTEER</MenuItem>
              
            </Select>
          </FormControl>
        </Box>

        {userType === 'volunteer'?(
        <>
            <div> HI {formik.values.firstName.toUpperCase()} LET'S KNOW YOU BETTER</div>
            <TextField
            fullWidth
            autoComplete="Address"
            type="String"
            label="Present Address"
            {...getFieldProps('address')}
            error={Boolean(touched.address && errors.address)}
            helperText={touched.address && errors.address}
          />
          <FormGroup >
            <div >LANGUAGES KNOWN</div>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel control={<Checkbox value = 'english' onChange = {e => handleCheckbox(e, formik)}  />} label="English" />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value ='hindi' onChange = {e => handleCheckbox(e, formik)} />} label="Hindi"  />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value = 'urdu' onChange = {e => handleCheckbox(e, formik)} />} label="Urdu"  />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value = 'gujrati' onChange = {e => handleCheckbox(e, formik)} />} label="Gujrati" />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value = 'marathi' onChange = {e => handleCheckbox(e, formik)} />} label="Marathi" />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </FormGroup>

          <FormGroup>
            <div >SKILLS</div>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel control={<Checkbox value = 'story telling' onChange = {e => handleCheckboxSkill(e, formik)}  />} label="Story Telling" />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value ='photography' onChange = {e => handleCheckboxSkill(e, formik)} />} label="Photography"  />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value = 'writing' onChange = {e => handleCheckboxSkill(e, formik)} />} label="Writing"  />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value = 'designing' onChange = {e => handleCheckboxSkill(e, formik)} />} label="Designing" />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value = 'marketing' onChange = {e => handleCheckboxSkill(e, formik)} />} label="Marketing" />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </FormGroup>

          <FormGroup>
            <div  >LOCATION OF WORK</div>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel control={<Checkbox value = 'outside mumbai' onChange = {e => handleCheckboxLocation(e, formik)}  />} label="Outside Mumbai" />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value ='navi mumbai' onChange = {e => handleCheckboxLocation(e, formik)} />} label="Navi Mumbai"  />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value = 'central zone' onChange = {e => handleCheckboxLocation(e, formik)} />} label="Central zone"  />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value = 'western Zone' onChange = {e => handleCheckboxLocation(e, formik)} />} label="Western Zone" />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value = 'harbour Zone' onChange = {e => handleCheckboxLocation(e, formik)} />} label="Harbour Zone" />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value = 'office' onChange = {e => handleCheckboxLocation(e, formik)} />} label="In-Office (Mahim)" />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                  <FormControlLabel  control={<Checkbox value = 'virtual' onChange = {e => handleCheckboxLocation(e, formik)} />} label="Virtual" />
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </FormGroup>
          

        </>


        ):(
          <div/>
        )}

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
