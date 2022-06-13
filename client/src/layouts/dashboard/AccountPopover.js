import { useRef, useState,useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Link as RouterLink , useLocation,useNavigate} from 'react-router-dom';
// @mui
import { alpha, useTheme  } from '@mui/material/styles';
import decode from 'jwt-decode'
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
// mocks_
import account from '../../_mock/account';


// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/dashboard/app',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: '/dashboard/profile',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logOut = () => {
    dispatch({type: 'LOGOUT'});
    navigate('/', { replace: true });
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

  const anchorRef = useRef(null);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.result.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {user?.result.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={logOut} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
