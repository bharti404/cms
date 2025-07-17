import React from 'react';
import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ExportButton = () => (
  <Button variant="contained" startIcon={<FileDownloadIcon />}>
    Export
  </Button>
);

export default ExportButton;
