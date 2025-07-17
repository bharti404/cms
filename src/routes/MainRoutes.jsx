





import React, { lazy } from 'react';

// project import
import MainLayout from '../layout/MainLayout';
import Loadable from '../component/Loadable';
import Reports from '../views/Dashboard/report/Reports';  // ✅ Already imported

const Expenses = Loadable(lazy(() => import('views/Dashboard/Expenses/CryptoDashboard')));



// Lazy imports for other pages
const DashboardDefault = Loadable(lazy(() => import('views/Dashboard/Default')));
const UtilsTypography = Loadable(lazy(() => import('views/Utils/Typography')));

const SamplePage = Loadable(lazy(() => import('views/Application')));
const Monitoring = Loadable(lazy(() => import('views/Dashboard/Monitoring/Monitoring')));
const Statistics = Loadable(lazy(() => import('views/Dashboard/Statistics/Statistics')));

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
    

  ]
};

export default MainRoutes;

