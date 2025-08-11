
// function Summary (){
//     return(
//         <h1>hey</h1>
//     )
// }
// export default Summary

import React from 'react';
import { 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Divider,
  useTheme,
  CircularProgress,
  Stack,
  LinearProgress

} from '@mui/material';
import {
  Receipt as ReceiptIcon,
  HourglassEmpty as DraftIcon,
  Send as SentIcon,
  CheckCircle as ConfirmedIcon,
  DoneAll as CompletedIcon,
  Cancel as CancelledIcon
} from '@mui/icons-material';


const staticInvoices = [
  { _id: '1', status: 'draft', referenceNo: 'INV-2023-001', amount: 1250, customer: { name: 'John Doe' }, date: '2023-01-15' },
  { _id: '2', status: 'sent', referenceNo: 'INV-2023-002', amount: 890, customer: { name: 'Jane Smith' }, date: '2023-01-16' },
  { _id: '3', status: 'confirmed', referenceNo: 'INV-2023-003', amount: 2450, customer: { name: 'Acme Corp' }, date: '2023-01-17' },
  { _id: '4', status: 'completed', referenceNo: 'INV-2023-004', amount: 1750, customer: { name: 'Global Inc' }, date: '2023-01-18' },
  { _id: '5', status: 'cancelled', referenceNo: 'INV-2023-005', amount: 3200, customer: { name: 'Test Company' }, date: '2023-01-19' },
  { _id: '6', status: 'draft', referenceNo: 'INV-2023-006', amount: 540, customer: { name: 'Another Client' }, date: '2023-01-20' },
];

// const Summary = () => {
//   const theme = useTheme();
//   const [loading] = React.useState(false);
//   const [invoices] = React.useState(staticInvoices);

//   const totalInvoices = invoices.length;
//   const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
//   const statusCounts = invoices.reduce((acc, invoice) => {
//     acc[invoice.status] = (acc[invoice.status] || 0) + 1;
//     return acc;
//   }, {});

 
//   const statusData = [
//     { status: 'draft', label: 'Draft', color: theme.palette.warning.main, icon: <DraftIcon /> },
//     { status: 'sent', label: 'Sent', color: theme.palette.info.main, icon: <SentIcon /> },
//     { status: 'confirmed', label: 'Confirmed', color: theme.palette.primary.main, icon: <ConfirmedIcon /> },
//     { status: 'completed', label: 'Completed', color: theme.palette.success.main, icon: <CompletedIcon /> },
//     { status: 'cancelled', label: 'Cancelled', color: theme.palette.error.main, icon: <CancelledIcon /> }
//   ];

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
//         Invoice Summary
//       </Typography>
      
     
//       <Grid container spacing={2} sx={{ mb: 3 }}>
       
//         <Grid item xs={6} sm={4} md={2}>
//           <Card sx={{ height: '100%' }}>
//             <CardContent sx={{ p: 2 }}>
//               <Stack direction="row" alignItems="center" spacing={1}>
//                 <ReceiptIcon color="primary" sx={{ fontSize: 24 }} />
//                 <Box>
//                   <Typography variant="h6">{totalInvoices}</Typography>
//                   <Typography variant="caption" color="text.secondary">Total</Typography>
//                 </Box>
//               </Stack>
//             </CardContent>
//           </Card>
//         </Grid>

        
       
//         {statusData.map((item) => (
//           <Grid item xs={6} sm={4} md={2} key={item.status}>
//             <Card sx={{ height: '100%' }}>
//               <CardContent sx={{ p: 2 }}>
//                 <Stack direction="row" alignItems="center" spacing={1}>
//                   <Box sx={{ color: item.color }}>
//                     {React.cloneElement(item.icon, { sx: { fontSize: 24 } })}
//                   </Box>
//                   <Box>
//                     <Typography variant="h6">{statusCounts[item.status] || 0}</Typography>
//                     <Typography variant="caption" color="text.secondary">{item.label}</Typography>
//                   </Box>
//                 </Stack>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

     
//       <Card sx={{ mb: 3 }}>
//         <CardContent>
//           <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//             Recent Invoices
//           </Typography>
//           <Divider sx={{ mb: 2 }} />
//           <Grid container spacing={2}>
//             {invoices.slice(0, 6).map((invoice) => {
//               const status = statusData.find(s => s.status === invoice.status);
//               return (
//                 <Grid item xs={12} sm={6} md={4} key={invoice._id}>
//                   <Card variant="outlined">
//                     <CardContent sx={{ p: 2 }}>
//                       <Stack direction="row" justifyContent="space-between" alignItems="center">
//                         <Box>
//                           <Typography fontWeight="medium" noWrap>
//                             {invoice.referenceNo}
//                           </Typography>
//                           <Typography variant="body2" noWrap>
//                             {invoice.customer?.name}
//                           </Typography>
//                         </Box>
//                         <Box sx={{ 
//                           backgroundColor: `${status.color}20`,
//                           px: 1,
//                           borderRadius: 1,
//                           textAlign: 'center'
//                         }}>
//                           <Typography variant="caption" sx={{ color: status.color }}>
//                             {status.label}
//                           </Typography>
//                           <Typography variant="body2" fontWeight="bold">
//                             ${invoice.amount}
//                           </Typography>
//                         </Box>
//                       </Stack>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               );
//             })}
//           </Grid>
//         </CardContent>
//       </Card>

      
//       <Card>
//         <CardContent>
//           <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
//             Status Overview
//           </Typography>
//           <Divider sx={{ mb: 2 }} />
//           <Grid container spacing={2}>
//             {statusData.map((item) => (
//               <Grid item xs={12} sm={6} md={4} key={item.status}>
//                 <Box sx={{ 
//                   display: 'flex',
//                   alignItems: 'center',
//                   p: 2,
//                   backgroundColor: `${item.color}10`,
//                   borderRadius: 1
//                 }}>
//                   <Box sx={{ 
//                     width: 40,
//                     height: 40,
//                     backgroundColor: `${item.color}20`,
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     mr: 2
//                   }}>
//                     {React.cloneElement(item.icon, { sx: { color: item.color, fontSize: 20 } })}
//                   </Box>
//                   <Box>
//                     <Typography variant="body1" fontWeight="medium">
//                       {statusCounts[item.status] || 0} {item.label}
//                     </Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       {Math.round((statusCounts[item.status] / totalInvoices * 100)) || 0}% of total
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

const Summary = () => {
  const theme = useTheme();
  const [loading] = React.useState(false);
  const [invoices] = React.useState(staticInvoices);

  // Calculate summary data
  const totalInvoices = invoices.length;
  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const statusCounts = invoices.reduce((acc, invoice) => {
    acc[invoice.status] = (acc[invoice.status] || 0) + 1;
    return acc;
  }, {});

  // Status data with colors and icons
  const statusData = [
    { status: 'draft', label: 'Draft', color: theme.palette.warning.main, icon: <DraftIcon /> },
    { status: 'sent', label: 'Sent', color: theme.palette.info.main, icon: <SentIcon /> },
    { status: 'confirmed', label: 'Confirmed', color: theme.palette.primary.main, icon: <ConfirmedIcon /> },
    { status: 'completed', label: 'Completed', color: theme.palette.success.main, icon: <CompletedIcon /> },
    { status: 'cancelled', label: 'Cancelled', color: theme.palette.error.main, icon: <CancelledIcon /> }
  ];

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
        Invoice Summary Dashboard
      </Typography>
      
      {/* Enhanced Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 3}}>
        {/* Total Invoices - Larger Card */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ 
            height: '100%',
            minHeight: 160,
            borderLeft: `6px solid ${theme.palette.primary.main}`,
            boxShadow: theme.shadows[4]
          }}>
            <CardContent sx={{ 
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <ReceiptIcon color="primary" sx={{ fontSize: 40 }} />
                <Box>
                  <Typography variant="h3" component="div">
                    {totalInvoices}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    Total Invoices
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Status Counts - Larger Cards */}
        {statusData.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.status}>
            <Card sx={{ 
              height: '100%',
              minHeight: 160,
              borderLeft: `6px solid ${item.color}`,
              boxShadow: theme.shadows[4]
            }}>
              <CardContent sx={{ 
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box sx={{ 
                    backgroundColor: `${item.color}20`,
                    p: 1.5,
                    borderRadius: '50%',
                    display: 'flex'
                  }}>
                    {React.cloneElement(item.icon, { 
                      sx: { 
                        color: item.color, 
                        fontSize: 32 
                      } 
                    })}
                  </Box>
                  <Box>
                    <Typography variant="h3" component="div">
                      {statusCounts[item.status] || 0}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {item.label}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mt: 1 }}>
                      {Math.round((statusCounts[item.status] / totalInvoices * 100)) || 0}% of total
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Enhanced Recent Invoices Section */}
      <Card sx={{ 
        mb: 4,
        boxShadow: theme.shadows[4]
      }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ 
            fontWeight: 'bold',
            mb: 3
          }}>
            Recent Invoices
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={3}>
            {invoices.slice(0, 6).map((invoice) => {
              const status = statusData.find(s => s.status === invoice.status);
              return (
                <Grid item xs={12} sm={6} lg={4} key={invoice._id}>
                  <Card variant="outlined" sx={{
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[6]
                    }
                  }}>
                    <CardContent sx={{ p: 3 }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" fontWeight="bold" noWrap>
                            {invoice.referenceNo}
                          </Typography>
                          <Typography variant="body1" noWrap sx={{ mt: 1 }}>
                            {invoice.customer?.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                            {new Date(invoice.date).toLocaleDateString()}
                          </Typography>
                        </Box>
                        <Box sx={{ 
                          backgroundColor: `${status.color}10`,
                          p: 2,
                          borderRadius: 2,
                          minWidth: 100,
                          textAlign: 'center'
                        }}>
                          <Typography variant="subtitle2" sx={{ 
                            color: status.color,
                            fontWeight: 'bold'
                          }}>
                            {status.label}
                          </Typography>
                          <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
                            ${invoice.amount}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Card>

      {/* Status Distribution Visualization */}
      <Card sx={{ 
        boxShadow: theme.shadows[4]
      }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ 
            fontWeight: 'bold',
            mb: 3
          }}>
            Status Distribution
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={3}>
            {statusData.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={item.status}>
                <Box sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  backgroundColor: `${item.color}08`,
                  borderRadius: 2,
                  height: '100%'
                }}>
                  <Box sx={{ 
                    width: 60,
                    height: 60,
                    backgroundColor: `${item.color}20`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2
                  }}>
                    {React.cloneElement(item.icon, { 
                      sx: { 
                        color: item.color, 
                        fontSize: 28 
                      } 
                    })}
                  </Box>
                  <Typography variant="h4" fontWeight="bold">
                    {statusCounts[item.status] || 0}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
                    {item.label}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={(statusCounts[item.status] / totalInvoices * 100) || 0} 
                    sx={{ 
                      height: 8,
                      width: '100%',
                      mt: 2,
                      borderRadius: 4,
                      backgroundColor: `${item.color}20`,
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: item.color
                      }
                    }}
                  />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {Math.round((statusCounts[item.status] / totalInvoices * 100)) || 0}%
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Summary;
