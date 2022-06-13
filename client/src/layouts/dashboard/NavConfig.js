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
              title: 'requested tasks' ,
              path: '/dashboard/taskrequested',
              icon: getIcon('eva:message-square-fill'),
            },
            {
              title: 'assigned tasks' ,
              path: '/dashboard/taskassigned',
              icon: getIcon('eva:file-text-fill'),
            },
            {
              title: 'completed tasks' ,
              path: '/dashboard/taskdone',
              icon: getIcon('eva:checkmark-circle-2-fill'),
            }
          ]

if(user?.result.role === 'volunteer') {
    NavConfig.splice(1,1);
  }


export default  NavConfig
  






  






