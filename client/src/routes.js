import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//

import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import Blog from './pages/Blog'
import LandApp from './pages/landing/src/LandApp'
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([

    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp replace/> },
        { path: 'user', element: <User /> },
        { path: 'taskassigned', element: <Blog /> },
      ],
    },
    {
      path: '/',
      element: <LandApp />,
    },
     
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/404', element: <NotFound /> },
    { path: '/*', element: <Navigate to="/404" replace/> },
      

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
