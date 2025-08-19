import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Box,
  Typography,
  Select,
  MenuItem,
  TextField,
  CircularProgress,
  IconButton,
  Grid,
  InputAdornment
} from "@mui/material";
import { Close, CloudUpload } from '@mui/icons-material'
import { FaEye } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import CreateInvoice from "./CreateInvoice";
import TestingUI from "./TestingUI";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { MdModeEditOutline } from "react-icons/md";
import EditInvoice from "./EditInvoice";

import axiosInstance from "api/axiosInstance";
import { TRUE } from "sass";

const rows = [
  {
    id: 1,
    name: "Ram",
    price: "sitaRam@gmail.com",
    address: "ram mandir in ayodhyadfs sdviusv sjbff",
    postCode: "201301",
    data: "20-4-2025",
  },
];

function BookKeeping() {
  const [openCategoryDropdown, setOpenCategoryDropDown] = useState(false);
  const [selectCategory, setSelectCategory] = useState("");
  const [showInvoice, setShowInvoice] = useState(false);
  const [renderForDownload, setRenderForDownload] = useState(false);
  const [category, setCategory] = useState([]);
  const [allInvoice, setAllInvoice] = useState([]);
  const pdfRef = useRef();
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [showInvoiceForm, setShowInvoiceForm] = useState(false);

  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);
  const [selectedInvoiceData, setSelectedInvoiceData] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
  invoiceNumber: '',
  supplierName: '',
  email: '',
  receivedDate: '',
  dueDate: '',
  amount: '',
  pdfFile: null,
  // ... other fields
});

const handleFileUpload = (e) => {
  const file = e.target.files[0];
  if (file && file.type === 'application/pdf') {
    setCustomerInfo({ ...customerInfo, pdfFile: file });
  } else {
    alert('Please upload a PDF file');
  }
};

  const generateReferenceNo = () => {
    const year = new Date().getFullYear();
    const randomNumber = Math.floor(Math.random() * 900) + 100; // random 3-digit number
    return `INV-${year}-${randomNumber}`;
  };



  const filteredInvoices = allInvoice.filter((invoice) => {
    if (statusFilter === "all") return true;
    return invoice.status === statusFilter;
  });
  const handleStatusFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };
  useEffect(() => {
    axiosInstance
      .get("/api/categories")
      .then((res) => {
        console.log("Fetched categories:", res.data);
        setCategory(res.data);
      })
      .catch((err) => {
        console.error("Axios error:", err);
      });
  }, []);



  useEffect(() => {
    const fetchInvoices = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/api/invoice");
        setAllInvoice(response.data);
      } catch (error) {
        console.error("Axios error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInvoices();
  }, []);
  useEffect(() => {
    if (renderForDownload && pdfRef.current) {
      // Wait briefly to ensure it's mounted
      setTimeout(() => {
        html2canvas(pdfRef.current, { scale: 2 }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.save("invoice.pdf");

          setRenderForDownload(false); // remove the hidden render
        });
      }, 300);
    }
  }, [renderForDownload]);

  const handleOpenDropDown = () => {
    setOpenCategoryDropDown(true);
  };

  const handleCloseDropDown = () => {
    setOpenCategoryDropDown(false);
    setSelectCategory("");
  };

  //   const handleDownloadPdf = (invoiceData) => {
  //   setSelectedInvoiceData(invoiceData); // Set the invoice data to render
  //   setRenderForDownload(true); // Trigger the PDF generation
  // };
  const handleDownloadPdf = async (invoiceData) => {
    try {
      setIsDownloading(true);
      setSelectedInvoiceData(invoiceData);
      setRenderForDownload(true);
    } catch (error) {
      console.error("Download error:", error);
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    if (renderForDownload && pdfRef.current && selectedInvoiceData) {
      const generatePdf = async () => {
        try {
          const input = pdfRef.current;

          // Increase scale for better quality
          const canvas = await html2canvas(input, {
            scale: 3,
            logging: true,
            useCORS: true,
          });

          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.save(`invoice_${selectedInvoiceData.referenceNo}.pdf`);
        } catch (error) {
          console.error("Error generating PDF:", error);
        } finally {
          setRenderForDownload(false);
          setIsDownloading(false);
        }
      };

      // Slightly longer timeout to ensure rendering
      setTimeout(generatePdf, 500);
    }
  }, [renderForDownload, selectedInvoiceData]);



  const handleCustomerChange = (field, value) => {
    setCustomerInfo((prev) => ({
      ...prev,
      customer: {
        ...prev.customer,
        [field]: value,
      },
    }));
  };

  const handleViewInvoice = async (invoiceId) => {
    setSelectedInvoiceId(invoiceId);
    try {
      const response = await axiosInstance.get(`/api/invoice/${invoiceId}`);
      setSelectedInvoiceData(response.data);
      setShowInvoice(true);
    } catch (error) {
      console.error("Error fetching invoice:", error);
      // Handle error (show toast, etc.)
    }
  };

  const handleEditInvoice = (invoiceId) => {
    setSelectedInvoiceId(invoiceId);
    setShowEditForm(true);
  };

  const handleStatusUpdate = async (invoiceId, newStatus) => {
    try {
      setIsLoading(true);
      await axiosInstance.put(`/api/invoice/${invoiceId}`, {
        status: newStatus,
      });

      // Update local state to reflect the change
      setAllInvoice((prev) =>
        prev.map((invoice) =>
          invoice._id === invoiceId
            ? { ...invoice, status: newStatus }
            : invoice
        )
      );

      // Optional: Show success message
      alert("Status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <h1>Book-keeping</h1>
        <Stack direction="row" spacing={2}>
              <Select
                        value={statusFilter}
                        onChange={handleStatusFilterChange}
                        size="small"
                        sx={{
                          minWidth: 120,
                          backgroundColor: "white",
                          borderRadius: 1,
                        }}
                      >
                        <MenuItem value="all">All Statuses</MenuItem>
                        <MenuItem value="draft">Paid</MenuItem>
                        <MenuItem value="sent">Due</MenuItem>
                       
                      </Select>
            
         

          <Button variant="contained" onClick={handleOpenDropDown}>
            Upload Invoice
          </Button>
        </Stack>
      </Stack>

      <TableContainer component={Paper}>
        {isLoading ? (
          <Box sx={{ p: 3, textAlign: "center" }}>
            <CircularProgress />
          </Box>
        ) : filteredInvoices.length === 0 ? (
          <Box sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="body1">
              {statusFilter === "all"
                ? "No invoices available"
                : `No ${statusFilter} invoices found`}
            </Typography>
            {statusFilter !== "all" && (
              <Button
                variant="outlined"
                onClick={() => setStatusFilter("all")}
                sx={{ mt: 2 }}
              >
                Show All Invoices
              </Button>
            )}
          </Box>
        ) : (
          <Table>
            <TableHead
              sx={{
                backgroundColor: "primary.main",
              }}
            >
              <TableRow>
                <TableCell sx={{ color: "white" }}>Invoice No </TableCell>
                <TableCell sx={{ color: "white" }}>Supplier/Vendor Name </TableCell>
                <TableCell sx={{ color: "white" }}>Email</TableCell>
                 <TableCell sx={{ color: "white" }}>Received Date</TableCell>
                   <TableCell sx={{ color: "white" }}>Due Date</TableCell>
                     <TableCell sx={{ color: "white" }}>Amount</TableCell>
                      <TableCell sx={{ color: "white" }}>Status</TableCell>

              
                <TableCell sx={{ color: "white" }}>View</TableCell>
                <TableCell sx={{ color: "white" }}>Edit</TableCell>
                
                <TableCell sx={{ color: "white" }}>Download</TableCell>
              </TableRow>
            </TableHead>

           <TableBody>

           </TableBody>
          </Table>
        )}
      </TableContainer>

    {!selectCategory && (
  <Modal
    open={openCategoryDropdown}
    onClose={handleCloseDropDown}
    BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.8)" } }}
  >
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        bgcolor: "background.paper",
        borderRadius: "12px",
        boxShadow: 24,
        p: 4,
        maxHeight: "90vh",
        overflowY: "auto",
      }}
    >
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
        borderBottom="1px solid #eee"
        pb={2}
      >
        <Typography variant="h5" fontWeight="bold" color="primary">
          Invoice Details
        </Typography>
        <IconButton onClick={handleCloseDropDown} sx={{ color: "text.secondary" }}>
          <Close />
        </IconButton>
      </Stack>

      {/* Input Fields */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Invoice Number"
            required
            fullWidth
            variant="outlined"
            value={customerInfo.invoiceNumber}
            onChange={(e) => handleCustomerChange("invoiceNumber", e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            label="Supplier/Vendor Name"
            required
            fullWidth
            value={customerInfo.supplierName}
            onChange={(e) => handleCustomerChange("supplierName", e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={customerInfo.email}
            onChange={(e) => handleCustomerChange("email", e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            label="Received Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={customerInfo.receivedDate}
            onChange={(e) => handleCustomerChange("receivedDate", e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            label="Due Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={customerInfo.dueDate}
            onChange={(e) => handleCustomerChange("dueDate", e.target.value)}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            label="Amount"
            type="number"
            fullWidth
            value={customerInfo.amount}
            onChange={(e) => handleCustomerChange("amount", e.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
        </Grid>
        
        {/* PDF Upload Field */}
        <Grid item xs={12}>
          <Box
            sx={{
              border: '1px dashed #ccc',
              borderRadius: '4px',
              p: 2,
              textAlign: 'center',
              backgroundColor: '#fafafa',
            }}
          >
            <input
              accept=".pdf"
              style={{ display: 'none' }}
              id="invoice-pdf-upload"
              type="file"
              onChange={(e) => handleFileUpload(e)}
            />
            <label htmlFor="invoice-pdf-upload">
              <Button
                variant="outlined"
                component="span"
                startIcon={<CloudUpload />}
              >
                Upload Invoice PDF
              </Button>
            </label>
            {customerInfo.pdfFile && (
              <Typography variant="body2" mt={1}>
                {customerInfo.pdfFile.name}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
        <Button
          variant="outlined"
          onClick={handleCloseDropDown}
          sx={{ px: 4 }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            if (!customerInfo.invoiceNumber || !customerInfo.supplierName) {
              alert("Invoice number and supplier name are required.");
              return;
            }
            setOpenCategoryDropDown(false);
            setShowInvoiceForm(true);
          }}
          sx={{ px: 4 }}
        >
          Save Invoice
        </Button>
      </Box>
    </Box>
  </Modal>
)}

      {showInvoiceForm && (
        <Modal
          open={showInvoiceForm} // Changed from openCategoryDropdown to showInvoiceForm
          onClose={() => {
            setShowInvoiceForm(false);
            setOpenCategoryDropDown(false);
          }}
          BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.4)" } }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "5%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              maxHeight: "90vh",
              bgcolor: "white",
              borderRadius: "8px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              p: 3,
              overflowY: "auto",
            }}
          >
            <CreateInvoice
              category={selectCategory}
              onClose={() => {
                setShowInvoiceForm(false);
                setOpenCategoryDropDown(false);
              }}
              customerInfo={customerInfo} // Pass customer info to CreateInvoice
            />
          </Box>
        </Modal>
      )}

      

      {showInvoice && (
        <Modal
          open={showInvoice}
          onClose={() => setShowInvoice(false)}
          BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.4)" } }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "5%", // move it closer to top (not 50%)
              left: "50%",
              transform: "translateX(-50%)", // only center horizontally
              width: "80%",
              maxHeight: "90vh", // restrict height
              bgcolor: "white",
              borderRadius: "8px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              p: 3,
              overflowY: "auto", // add vertical scroll if needed
            }}
          >
            <div id="pdf-content">
              <TestingUI invoiceData={selectedInvoiceData} />
            </div>
          </Box>
        </Modal>
      )}

     
      {renderForDownload && selectedInvoiceData && (
        <div
          ref={pdfRef}
          style={{
            position: "absolute",
            left: "-9999px",
            top: 0,
          }}
        >
          <TestingUI invoiceData={selectedInvoiceData} />
        </div>
      )}

      {showEditForm && (
        <Modal
          open={showEditForm}
          onClose={() => {
            setShowEditForm(false);
            setSelectedInvoiceId(null);
          }}
          BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.4)" } }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "5%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              maxHeight: "90vh",
              bgcolor: "white",
              borderRadius: "8px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              p: 3,
              overflowY: "auto",
            }}
          >
            <EditInvoice
              invoiceId={selectedInvoiceId}
              onClose={() => {
                setShowEditForm(false);
                setSelectedInvoiceId(null);
              }}
              onUpdate={(updatedInvoice) => {
                // Update the invoice in your state
                setAllInvoice((prev) =>
                  prev.map((inv) =>
                    inv._id === updatedInvoice._id ? updatedInvoice : inv
                  )
                );
                setShowEditForm(false);
              }}
            />
          </Box>
        </Modal>
      )}

      <Modal
        open={confirmationOpen}
        onClose={() => setConfirmationOpen(false)}
        BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.4)" } }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            borderRadius: "8px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
            p: 3,
          }}
        >
          <Typography variant="h6" mb={2}>
            Are you sure you want to proceed?
          </Typography>
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button
              variant="outlined"
              onClick={() => setConfirmationOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setConfirmationOpen(false); // Close confirmation
                setSelectCategory(true); // Close customer modal
                // Wait for close animation
              }}
            >
              Yes
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default BookKeeping