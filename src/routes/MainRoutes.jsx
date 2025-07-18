

import React, { lazy } from 'react';

// project import
import MainLayout from '../layout/MainLayout';
import Loadable from '../component/Loadable';




// Lazy imports for other pages
const DashboardDefault = Loadable(lazy(() => import('views/Dashboard/Default')));
const UtilsTypography = Loadable(lazy(() => import('views/Utils/Typography')));

const Expenses = Loadable(lazy(() => import('views/Dashboard/Expenses/CryptoDashboard')));
const SamplePage = Loadable(lazy(() => import('views/Application')));
const Monitoring = Loadable(lazy(() => import('views/Dashboard/Monitoring/Monitoring')));
const Statistics = Loadable(lazy(() => import('views/Dashboard/Statistics/Statistics')));

const Reports = Loadable(lazy(() => import('views/Dashboard/report/Reports')));  // ✅

// Application Lazy imports 

const Calendar = Loadable(lazy(() => import('views/Application/Calendar/CalendarPage')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/reports',          // ✅ Add this route
      element: <Reports />
    },
    { path: '/dashboard/monitoring',   // Monitoring
      element: <Monitoring />
     },
     {
      path: '/dashboard/expenses',
      element: <Expenses />
    },
    {
      path: '/utils/util-typography',
      element: <UtilsTypography />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    },
    {
      path: '/dashboard/statistics',   // ✅ New Statistics Route
      element: <Statistics />
    },


    // Applications
    {
      path: '/applications/Calendar',
      element: <Calendar />
    }

  ]
};

export default MainRoutes;

