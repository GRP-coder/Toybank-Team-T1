import { useRef, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';



import { Verified } from '@mui/icons-material';

// component
import Iconify from '../../../components/Iconify';
import {verifyUser} from '../../../actions/auth'

// ----------------------------------------------------------------------

export default function UserMoreMenu(user) {
  console.log(user);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleVerify = async () =>{
    user.id.verified = true;
    const p = await dispatch(verifyUser(user.id._id, user.id));
    navigate('/dashboard/app');
    navigate('/dashboard/user');
  }

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }} onClick = {handleVerify}>
          <ListItemIcon>
            <Verified />
          </ListItemIcon>
          <ListItemText primary="Verify" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        {/* <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon="eva:edit-fill" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem> */}
      </Menu>
    </>
  );
}
