import React from 'react';
import { Typography, Box } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';

const ReportHeader = () => (
  <Box display="flex" alignItems="center" gap={1}>
    <BarChartIcon />
    <Box>
      <Typography variant="h5">Reports</Typography>
      <Typography variant="body2">Generate and access various reports</Typography>
    </Box>
  </Box>
);

export default ReportHeader;
