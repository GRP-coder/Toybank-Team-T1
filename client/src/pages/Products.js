import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductSort, ProductList, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';
import App from '../sections/taskreq/admin/App'
import App1 from '../sections/taskreq/volunteer/App'

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>

        {(user.result.role === 'admin')?(
            'REQUESTED TASKS'
        ):(
          'TASKS REQUESTED'
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
