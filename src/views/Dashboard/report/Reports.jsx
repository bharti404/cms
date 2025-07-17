// import React from 'react';

// const Reports = () => {
//   return (
//     <div>
//       <h2>Reports Page</h2>
//       <p>This is your new page under the Dashboard dropdown.</p>
//     </div>
//   );
// };

// export default Reports;


import React from 'react';
import { Grid, Box } from '@mui/material';

import ReportHeader from './ReportHeader';
import ExportButton from './ExportButton';
import StatsCards from './StatsCards';
import UserAnalytics from './UserAnalytics';
import WeeklySalesChart from './WeeklySalesChart';

const Reports = () => {
  return (
    <div>
    <Box sx={{ p: 3 }}>
      {/* Top Header Row */}
      <Grid container justifyContent="space-between" alignItems="center" mb={3}>
        <Grid item>
          <ReportHeader />
        </Grid>
        <Grid item>
          <ExportButton />
        </Grid>
      </Grid>

      {/* Stat Cards Row */}
      <div style={{ display: 'grid', gap: '20px' }}>
      <StatsCards />
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 2 }}><UserAnalytics /></div>
        <div style={{ flex: 1 }}><WeeklySalesChart /></div>
      </div>
    </div>
      
    </Box>


    </div>
  );
};

export default Reports;

