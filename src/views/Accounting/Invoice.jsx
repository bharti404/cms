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
  IconButton,
} from "@mui/material";
import { FaEye } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { useState  ,useRef ,useEffect} from "react";
import { RxCross2 } from "react-icons/rx";
import CreateInvoice from "./CreateInvoice";
import TestingUI from "./TestingUI";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


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

const category = [
  { id: 1, name: "Vinyl Board" },
  { id: 2, name: "Hacking Works" },
  { id: 3, name: "Masonry Works" },
  { id: 4, name: "Plastering Works" },
  { id: 5, name: "Electrical Works" },
  { id: 6, name: "Plumbing Works" },
  { id: 7, name: "Air-conditioning" },
  { id: 8, name: "Ceiling / Partition Works" },
  { id: 9, name: "Painting Works" },
  { id: 10, name: "Aluminium Works" },
  { id: 11, name: "Metal / Iron Works" },
  { id: 12, name: "Glass / Mirror Works" },
  { id: 13, name: "Door Works" },
  { id: 14, name: "Timber Flooring" },
  { id: 15, name: "Polishing Floor Works" },
  { id: 16, name: "Carpentry Works" },
  { id: 17, name: "Work Top Works" },
  { id: 18, name: "General Works" },
  { id: 19, name: "Miscellaneous" },
];

function Invoice() {
  const [openCategoryDropdown, setOpenCategoryDropDown] = useState(false);
  const [selectCategory, setSelectCategory] = useState("");
  const [showInvoice , setShowInvoice] = useState(false);
  const [renderForDownload, setRenderForDownload] = useState(false);
const pdfRef = useRef();


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
    setSelectCategory("")
  };

const handleDownloadPdf = () => {
  setTimeout(() => {
    const input = document.getElementById("pdf-content");

    if (!input) {
      console.error("PDF content not found!");
      return;
    }

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    });
  }, 300); // wait 300ms to ensure Modal and DOM content is fully rendered
};


  return (
    <div>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Invoice</h1>
        <Button variant="contained" onClick={handleOpenDropDown}>
          Create Invoice
        </Button>
      </Stack>

      <TableContainer component={Paper}>
        <Table>
          <TableHead
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <TableRow>
              <TableCell sx={{ color: "white" }}>Reference No </TableCell>
              <TableCell sx={{ color: "white" }}>Customer Name </TableCell>
              <TableCell sx={{ color: "white" }}>Email</TableCell>
              <TableCell sx={{ color: "white" }}>Address</TableCell>
              <TableCell sx={{ color: "white" }}>Postal Code</TableCell>
              <TableCell sx={{ color: "white" }}>Date</TableCell>
              <TableCell sx={{ color: "white" }}>View</TableCell>
              <TableCell sx={{ color: "white" }}>Download</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>
                  {row.address.length > 20
                    ? row.address.slice(0, 20) + "..."
                    : row.address}
                </TableCell>

                <TableCell>{row.postCode}</TableCell>
                <TableCell>{row.data}</TableCell>
                <TableCell sx={{ fontSize: "16px" }}> <Button onClick={()=>setShowInvoice(true)}>{<FaEye />}</Button></TableCell>

                <TableCell >
                 <Button onClick={() => setRenderForDownload(true)}>
  <MdDownload style={{fontSize:"20px"}} />
</Button>

                </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {!selectCategory && (
        <Modal
          open={openCategoryDropdown}
          onClose={handleCloseDropDown}
          BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.4)" } }}
        >
          {/* The inner Box is the actual card */}
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
            {/* Header */}
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Typography variant="h6">Select Service</Typography>
              <Button
                sx={{ fontSize: "20px", color: "black", minWidth: "auto" }}
                onClick={handleCloseDropDown}
              >
                <RxCross2 />
              </Button>
            </Stack>

            {/* Dropdown */}
            <Select
              fullWidth
              value={selectCategory}
              onChange={(e) => setSelectCategory(e.target.value)}
              displayEmpty
              sx={{ mt: 2 }}
            >
              <MenuItem value="">
                <em>Category</em>
              </MenuItem>

              {category.map((cat) => (
                <MenuItem key={cat.id} value={(cat.name)}>
                  {cat.name}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Modal>
      )}

      {/* {selectCategory && (
        <Modal
          open={openCategoryDropdown}
          onClose={handleCloseDropDown}
          BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.4)" } }}
        >
         
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              bgcolor: "white",
              borderRadius: "8px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              p: 3,
            }}
          >
            <CreateInvoice category={selectCategory} onClose={handleCloseDropDown} />
          </Box>
        </Modal>
      )} */}

      {selectCategory && (
  <Modal
    open={openCategoryDropdown}
    onClose={handleCloseDropDown}
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
        overflowY: "auto" // add vertical scroll if needed
      }}
    >
      <CreateInvoice category={selectCategory} onClose={handleCloseDropDown} />
    </Box>
  </Modal>
)}


    {showInvoice && (
  <Modal
    open={showInvoice}
    onClose={()=>setShowInvoice(false)}
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
        overflowY: "auto" // add vertical scroll if needed
      }}
    >
  <div id="pdf-content">
        <TestingUI />
      </div>
    </Box>
  </Modal>
)}


{renderForDownload && (
  <div
    ref={pdfRef}
    style={{
      position: "absolute",
      left: "-9999px", // Hide off-screen
      top: 0,
    }}
  >
    <TestingUI />
  </div>
)}




    </div>
  );
}

export default Invoice;
