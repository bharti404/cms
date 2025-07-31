import React from "react";
import {
  Box,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from "@mui/material";

const TestingUI = () => {
  return (
    <Box p={4} sx={{ backgroundColor: "white", maxWidth: 1000, margin: "auto" }}>
      {/* Header */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h4" fontWeight="bold">
            STYLEMYSPACE
          </Typography>
          <Typography variant="body2">123 Sample Street</Typography>
          <Typography variant="body2">Singapore 123456</Typography>
          <Typography variant="body2">+65 1234 5678</Typography>
          <Typography variant="body2">sales@stylemyspace.com</Typography>
        </Grid>
        <Grid item xs={6}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell>Quotation No:</TableCell>
                <TableCell>Q20250731</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Date:</TableCell>
                <TableCell>31/07/2025</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Project:</TableCell>
                <TableCell>Condo Renovation</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Prepared by:</TableCell>
                <TableCell>Admin Chan</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Work Table */}
      <TableContainer component={Paper} elevation={0}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Item</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Work Description</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Qty</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Interior Design Consultancy</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Included</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>3D Perspective Rendering</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Included</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Budget Planning</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Included</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Reinstatement Works</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$750.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>Plumbing Works</TableCell>
              <TableCell>1</TableCell>
              <TableCell>$266.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Footer */}
          <Box mt={6}>
        <Divider />
        <Grid container spacing={4} mt={2}>
          <Grid item xs={6}>
            <Typography variant="body2" fontWeight="bold">
              Prepared By:
            </Typography>
            <Typography variant="body2">Name: ______________</Typography>
            <Typography variant="body2">Signature: _____________</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body2" fontWeight="bold">
              Approved By Client:
            </Typography>
            <Typography variant="body2">Name: ______________</Typography>
            <Typography variant="body2">Signature: _____________</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TestingUI