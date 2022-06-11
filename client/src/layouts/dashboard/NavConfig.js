// component
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import decode from 'jwt-decode'

import Iconify from '../../components/Iconify';
// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const user = JSON.parse(localStorage.getItem('profile'));

const NavConfig = [{
              title: 'dashboard',
              path: '/dashboard/app',
              icon: getIcon('eva:pie-chart-2-fill'),
            },
            {
              title: 'user',
              path: '/dashboard/user',
              icon: getIcon('eva:people-fill'),
            },
            {
              title: ' task requested' ,
              path: '/dashboard/taskassigned',
              icon: getIcon('eva:file-text-fill'),
            },
            {
              title: ' task assigned' ,
              path: '/dashboard/taskarequested',
              icon: getIcon('eva:file-text-fill'),
            },
          ]

if(user?.result.role === 'volunteer') {
    NavConfig.splice(1,1);
    console.log(NavConfig);
    NavConfig.push({
      title: ' task done' ,
      path: '/dashboard/taskassigned',
      icon: getIcon('eva:file-text-fill'),
    });
    
  }


export default  NavConfig
  






  






