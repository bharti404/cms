// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Divider,
// } from "@mui/material";

// const TestingUI = () => {
//   return (
//     <Box p={4} sx={{ backgroundColor: "white", maxWidth: 1000, margin: "auto" }}>
 
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={6}>
//           <Typography variant="h4" fontWeight="bold">
//             STYLEMYSPACE
//           </Typography>
//           <Typography variant="body2">123 Sample Street</Typography>
//           <Typography variant="body2">Singapore 123456</Typography>
//           <Typography variant="body2">+65 1234 5678</Typography>
//           <Typography variant="body2">sales@stylemyspace.com</Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <Table size="small">
//             <TableBody>
//               <TableRow>
//                 <TableCell>Quotation No:</TableCell>
//                 <TableCell>Q20250731</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Date:</TableCell>
//                 <TableCell>31/07/2025</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Project:</TableCell>
//                 <TableCell>Condo Renovation</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Prepared by:</TableCell>
//                 <TableCell>Admin Chan</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </Grid>
//       </Grid>

//       <Divider sx={{ my: 2 }} />

     
//       <TableContainer component={Paper} elevation={0}>
//         <Table size="small">
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: "bold" }}>Item</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Work Description</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Qty</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell>1</TableCell>
//               <TableCell>Interior Design Consultancy</TableCell>
//               <TableCell>-</TableCell>
//               <TableCell>Included</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>2</TableCell>
//               <TableCell>3D Perspective Rendering</TableCell>
//               <TableCell>-</TableCell>
//               <TableCell>Included</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>3</TableCell>
//               <TableCell>Budget Planning</TableCell>
//               <TableCell>-</TableCell>
//               <TableCell>Included</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>4</TableCell>
//               <TableCell>Reinstatement Works</TableCell>
//               <TableCell>1</TableCell>
//               <TableCell>$750.00</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell>5</TableCell>
//               <TableCell>Plumbing Works</TableCell>
//               <TableCell>1</TableCell>
//               <TableCell>$266.00</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Footer */}
//           <Box mt={6}>
//         <Divider />
//         <Grid container spacing={4} mt={2}>
//           <Grid item xs={6}>
//             <Typography variant="body2" fontWeight="bold">
//               Prepared By:
//             </Typography>
//             <Typography variant="body2">Name: ______________</Typography>
//             <Typography variant="body2">Signature: _____________</Typography>
//           </Grid>

//           <Grid item xs={6}>
//             <Typography variant="body2" fontWeight="bold">
//               Approved By Client:
//             </Typography>
//             <Typography variant="body2">Name: ______________</Typography>
//             <Typography variant="body2">Signature: _____________</Typography>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default TestingUI



import React from "react";

import { Box, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper ,Divider} from "@mui/material";
// import stylemyspace from "./logo/stylemyspace_logo.jpg";
// import hdb from "./logo/logo_hdb_contractor.jpg";
// import qanvast from "./logo/logo_qanvast_guarantee.jpg";
// import abc from "./logo/logo_abc.png";



const Quotation = ({invoiceData}) => {
  return (
    <Box sx={{ fontFamily: "Arial, sans-serif", fontSize: 14, p: 3, bgcolor: "#fff", color: "#000", border: "1px solid #ccc" }}>
      <Grid container spacing={4}>
  
        <Grid item xs={12} md={6}>
          <Box sx={{ pt: 5 }}>
            {/* <Box component="img" src={stylemyspace} alt="Stylemyspace Logo" sx={{ width: 120, mb: 1 }} /> */}
            <Typography>STYLEMYSPACE PTE LTD</Typography>
            <Typography>8 BURN ROAD</Typography>
            <Typography>#01-10, TRIVEX BUILDING</Typography>
            <Typography>SINGAPORE 369977</Typography>

            <Box sx={{ mt: 2 }}>
              <Typography>🌐 www.stylemyspace.com.sg</Typography>
              <Typography>📸 Instagram: stylemyspacesg</Typography>
              <Typography>📘 Facebook: stylemyspacesg</Typography>
            </Box>

            {/* <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <Box component="img" src={hdb} alt="HDB Licensed" sx={{ height: 40 }} />
              <Box component="img" src={qanvast} alt="Greenmark" sx={{ height: 40 }} />
              <Box component="img" src={abc} alt="BizSAFE" sx={{ height: 40 }} />
            </Box> */}
          </Box>
        </Grid>

   
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "right", mb: 2 }}>
            <Typography><strong>Addison Chai M:</strong> 8686 3000</Typography>
            <Typography><strong>Email:</strong> addison@stylemyspace.com.sg</Typography>
          </Box>

            <TableContainer component={Paper} sx={{  mb: 1, border: "1px solid black", borderRadius: 0, boxShadow: "none" }}>
            <Table size="small" sx={{ borderCollapse: "collapse" }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={2} sx={{ border: "1px solid black", fontWeight: 'bold', padding: "2px" }}>
                    CONTRACT/QUOTATION
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  ["Reference No:", invoiceData?.referenceNo],
                  ["Customer:", invoiceData?.
customer.name],
                  ["NRIC last 4 digit:",invoiceData?.customer?.nricLast4],
                  ["Contact No:", invoiceData?.customer?.
contactNumber ],
                  ["Email:", invoiceData?.customer?.email
],
                  ["Address:", invoiceData?.customer ?.
address
],
                  ["Postal Code:", invoiceData?.customer?.postalCode],
                 ["Date:", new Date(invoiceData?.customer?.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })]

                ].map(([label, value], idx) => (
                  <TableRow key={idx}>
                    <TableCell sx={{ width: "35%", border: "1px solid black", padding: "2px" }}>{label}</TableCell>
                    <TableCell sx={{ width: "65%", border: "1px solid black", padding: "2px" }}>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
              </TableContainer>



          <Box sx={{ fontSize: 12, mt: 1, borderTop: "1px solid #ccc", pt: 1 }}>
            <Typography> {`Company Bank Account: ${invoiceData?.company?.bankDetails?.
accountNumber

} `}</Typography>
           
            <Typography> { `payment using paynow key: ${invoiceData ?.
paymentMethods?.
paynowKey

}` }</Typography>
            <Typography> {`payment using internet transfer: ${invoiceData ?.paymentMethods?.internetTransfer}`}</Typography>
            <Typography>{`payment using cheque:${invoiceData ?.paymentMethods?.
cheque
}`}</Typography>
            <Typography> {`HDB LICENSE:${invoiceData ?.
hdbLicense
}`}</Typography>
          </Box>
        </Grid>
      </Grid>

      
      <Box sx={{ mt: 3 }}>
        
        <Typography sx={{ mt: 1 }}><u>We thank you for your kind enquiry and have pleasure in submitting our contract for the following items for your perusal.</u></Typography>
      </Box>

    </Box>
  );
};

// Hacking Works

// const HackingWorksComponent = ({ includeQuotation = true ,invoiceData }) => {
//   return (
//     <>
//     {includeQuotation && <Quotation invoiceData={invoiceData} />}

//     <Box sx={{ p: 3, fontFamily: "Arial, sans-serif", bgcolor: "#fff", color: "#333" }}>
//       <TableContainer component={Paper} sx={{ mb: 3 }}>
//         <Table size="small">
//           <TableHead>
//             <TableRow  >
//               <TableCell><strong>Item</strong></TableCell>
//               <TableCell><strong>Work Description</strong></TableCell>
//               <TableCell><strong>Quantity</strong></TableCell>
//               <TableCell><strong>Amount</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell colSpan={4} sx={{ bgcolor: "#e0e0e0", fontWeight: "bold", textTransform: "uppercase" }}>
//                 DESIGN & SERVICES 
//               </TableCell>
//             </TableRow>

//             {[
//               "Professional Design Consultation",
//               "Propose Space Planning",
//               "Detail Perspective Drawings",
//               "Budget Planning",
//               "Materials & Colour Scheme Proposal",
//               "Site Co-ordination & Supervision",
//             ].map((item, index) => (
//               <TableRow key={index}>
//                 <TableCell></TableCell>
//                 <TableCell>{item}</TableCell>
//                 <TableCell></TableCell>
//                 <TableCell>Inclusive</TableCell>
//               </TableRow>
//             ))}

         
//             <TableRow>
//               <TableCell>1</TableCell>
//               <TableCell sx={{ fontWeight: "bold", textTransform: "uppercase", bgcolor: "#e0e0e0" }}>
//                 HACKING WORKS:
//               </TableCell>
//               <TableCell></TableCell>
//               <TableCell></TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell>1.1</TableCell>
//               <TableCell sx={{ fontWeight: "bold", textDecoration: "underline" }}>
//                 Supply labour and tool to hack/ dismantle away the following item:
//               </TableCell>
              
//               <TableCell>&gt;</TableCell>
//               <TableCell></TableCell>
//             </TableRow>

//             {[
//               "Living & Dining Hall: floor tile & skirting",
//               "3 Bedrooms: floor tile/parquet/laminate & skirting",
//               "Kitchen: floor & wall tile, kitchen cabinet, work top & fitting",
//               "Master Bathroom: floor & wall tile, sanitary, vanity, screen & fitting",
//               "Common Bathroom: floor & wall tile, sanitary, vanity, screen & fitting",
//               "Balcony: floor tile",
//             ].map((desc, idx) => (
//               <TableRow key={`1.1-${idx}`}>
//                 <TableCell>{String.fromCharCode(97 + idx)})</TableCell> 

//                 <TableCell>{desc}</TableCell>
//                 <TableCell>&gt;</TableCell>
//                 <TableCell></TableCell>
//               </TableRow>
//             ))}

//             <TableRow>
//               <TableCell >1.2</TableCell>
//               <TableCell  sx={{ fontWeight: "bold", textDecoration: "underline" }}>Additional other’s hacking work for: </TableCell>
              
//               <TableCell>&gt;</TableCell>
//               <TableCell></TableCell>
//             </TableRow>
//             {[
//               "existing ceiling/ cornices work, carpentry work, wardrobe ...."
//             ].map((item, index) => (
//               <TableRow key={index}>
//                  <TableCell>{String.fromCharCode(97 + index)})</TableCell>
//                 <TableCell>{item}</TableCell>
//                 <TableCell></TableCell>
//                 <TableCell>Inclusive</TableCell>
//               </TableRow>
//             ))}

//             <TableRow>
//               <TableCell>1.3</TableCell>
//               <TableCell sx={{ fontWeight: "bold", textDecoration: "underline" }}>Internal wall demolition: </TableCell>
//               <TableCell>&gt;</TableCell>
//               <TableCell></TableCell>
//             </TableRow>
//               {[
//               "(subject to HDB permit approved w/o request PE): wall between Master Bedroom and Bedroom 2"
//             ].map((item, index) => (
//               <TableRow key={index}>
//                  <TableCell>{String.fromCharCode(97 + index)})</TableCell>
//                 <TableCell>{item}</TableCell>
//                 <TableCell></TableCell>
//                 <TableCell>Inclusive</TableCell>
//               </TableRow>
//             ))}

//             <TableRow>
//               <TableCell>1.4</TableCell>
//               <TableCell>Application of hacking permit process</TableCell>
//               <TableCell>&gt;</TableCell>
//               <TableCell>Included</TableCell>
//             </TableRow>

//             {/* MASONRY WORKS */}
//             <TableRow>
//               <TableCell>2</TableCell>
//               <TableCell sx={{ fontWeight: "bold", textTransform: "uppercase", bgcolor: "#e0e0e0" }}>
//                 MASONRY WORKS:
//               </TableCell>
//               <TableCell></TableCell>
//               <TableCell></TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell colSpan={4} sx={{ fontStyle: "italic", bgcolor: "#f9f9f9" }}>
//                 Material Guide: Black cement, Chemical cement, W1 cement strengthener, Mapei, QS104, 2 in1 screeding, 3in1 waterproof screed, Floor base height 50mm Homogeneous Tile ($3.50sqft)
//               </TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell>2.1</TableCell>
//               <TableCell sx={{ fontWeight: "bold", textDecoration: "underline" }}>
//                 Make good and plaster smooth affected areas for the following:
//               </TableCell>
//               <TableCell>&gt;</TableCell>
//               <TableCell></TableCell>
//             </TableRow>

//             {[
//               "between Master Bedroom and Bedroom 2 (refer to item A01)",
//               "constructed new door-way for Kitchen",
//             ].map((desc, idx) => (
//               <TableRow key={`2.1-${idx}`}>
//                  <TableCell>{String.fromCharCode(97 + idx)})</TableCell>
//                 <TableCell>{desc}</TableCell>
//                 <TableCell>&gt;</TableCell>
//                 <TableCell></TableCell>
//               </TableRow>
//             ))}

//             <TableRow>
//               <TableCell>2.2</TableCell>
//               <TableCell sx={{ fontWeight: "bold", textDecoration: "underline" }}>
//                 Construct concrete wall using 63mm hollow block c/w smooth plastering for:
//               </TableCell>
//               <TableCell>&gt;</TableCell>
//               <TableCell></TableCell>
//             </TableRow>

//             {[
//               "to seal up store entrance",
//               "box up shower wall with recess design",
//               "box up suspended toilet bowl wall with wall tile finish (1/2 nos)",
//               "construct bathtub support wall with tile finish at ...",
//             ].map((desc, idx) => (
//               <TableRow key={`2.2-${idx}`}>
//                  <TableCell>{String.fromCharCode(97 + idx)})</TableCell>
//                 <TableCell>{desc}</TableCell>
//                 <TableCell>{idx === 2 ? "1/2 nos" : idx === 3 ? "1 nos" : ">"}</TableCell>
//                 <TableCell></TableCell>
//               </TableRow>
//             ))}

//             <TableRow>
//               <TableCell>2.3</TableCell>
//               <TableCell>Top up Balcony floor level using light weight blocks to level Balcony with Living</TableCell>
//               <TableCell>&gt;</TableCell>
//               <TableCell></TableCell>
//             </TableRow>

//             <TableRow>
//               <TableCell>2.4</TableCell>
//               <TableCell sx={{ color: "red", fontWeight: "bold" }}>
//                 Apply water-proofing membrane includes: "NS grout", "Quick seal 104", "Pre-packed 3-in-1 water-proof screed" for the following:
//               </TableCell>
//               <TableCell></TableCell>
//               <TableCell></TableCell>
//             </TableRow>

//             {[
//               "Kitchen sink area",
//               "Master Bathroom with an up-turn of 150mm against wall",
//               "Common Bathroom with an up-turn of 150mm against wall",
//               "Balcony",
//             ].map((desc, idx) => (
//               <TableRow key={`2.4-${idx}`}>
//                  <TableCell>{String.fromCharCode(97 + idx)})</TableCell>
//                 <TableCell>{desc}</TableCell>
//                 <TableCell>1 lot</TableCell>
//                 <TableCell></TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Typography sx={{ mt: 2 }}>
//         Yours Faithfully<br />
//         <strong>Stylemyspace Pte Ltd</strong>
//       </Typography>

//       <Box sx={{ textAlign: "right", mt: 3 }}>
//         Page 1 of 8 <span style={{ textDecoration: "underline", marginLeft: "10px" }}>Agreed and Confirmed By:</span>
//       </Box>
//     </Box>
//      <Box
//             sx={{
//               height: 40, 
//               pageBreakAfter: "always", 
//             }}
//           />
//     </>
//   );
// };

const HackingWorksComponent = ({ includeQuotation = true, invoiceData }) => {
  // Group items by category name
  const groupedItems = invoiceData.items.reduce((acc, item) => {
    const categoryName = item.category?.name || 'Other Works'; // Fallback if category name not available
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(item);
    return acc;
  }, {});

  return (
    <>
      {includeQuotation && <Quotation invoiceData={invoiceData} />}

      <Box sx={{ p: 3, fontFamily: "Arial, sans-serif", bgcolor: "#fff", color: "#333" }}>
        <TableContainer component={Paper} sx={{ mb: 3 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>Item</strong></TableCell>
                <TableCell><strong>Work Description</strong></TableCell>
                <TableCell><strong>Quantity</strong></TableCell>
                <TableCell><strong>Amount (SGD)</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* DESIGN & SERVICES section (keep this static if needed) */}
              {/* <TableRow>
                <TableCell colSpan={4} sx={{ bgcolor: "#e0e0e0", fontWeight: "bold", textTransform: "uppercase" }}>
                  DESIGN & SERVICES 
                </TableCell>
              </TableRow> */}

              {/* {[
                "Professional Design Consultation",
                "Propose Space Planning",
                "Detail Perspective Drawings",
                "Budget Planning",
                "Materials & Colour Scheme Proposal",
                "Site Co-ordination & Supervision",
              ].map((item, index) => (
                <TableRow key={index}>
                  <TableCell></TableCell>
                  <TableCell>{item}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Inclusive</TableCell>
                </TableRow>
              ))} */}

              {/* Dynamic items grouped by category */}
              {Object.entries(groupedItems).map(([categoryName, items], categoryIndex) => (
                <React.Fragment key={categoryName}>
                  <TableRow>
                    <TableCell>{categoryIndex + 1}</TableCell>
                    <TableCell sx={{ fontWeight: "bold", textTransform: "uppercase", bgcolor: "#e0e0e0" }}>
                      {categoryName.toUpperCase()}:
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>

                  {items.map((item, itemIndex) => (
                    <React.Fragment key={`${categoryName}-${itemIndex}`}>
                      <TableRow>
                        <TableCell>{categoryIndex + 1}.{itemIndex + 1}</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          {item.title}
                        </TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>{item.amount.toFixed(2)}</TableCell>
                      </TableRow>
                      
                      {item.workDescription && (
                        <TableRow>
                          <TableCell></TableCell>
                          <TableCell colSpan={3}>
                            {item.workDescription.split('\n').map((line, i) => (
                              <div key={i}>{line}</div>
                            ))}
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}

              {/* You can keep additional static sections if needed */}
              <TableRow>
                <TableCell colSpan={4} sx={{ fontStyle: "italic", bgcolor: "#f9f9f9" }}>
                  Material Guide: Black cement, Chemical cement, W1 cement strengthener, Mapei, QS104, 2 in1 screeding, 3in1 waterproof screed, Floor base height 50mm Homogeneous Tile ($3.50sqft)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography sx={{ mt: 2 }}>
          Yours Faithfully<br />
          <strong>Stylemyspace Pte Ltd</strong>
        </Typography>

        <Box sx={{ textAlign: "right", mt: 3 }}>
          Page 1 of 8 <span style={{ textDecoration: "underline", marginLeft: "10px" }}>Agreed and Confirmed By:</span>
        </Box>
      </Box>
      <Box
        sx={{
          height: 40, 
          pageBreakAfter: "always", 
        }}
      />
    </>
  );
};

// Terms & condition 

const TermsConditions = ({ includeQuotation = true  , invoiceData} )  => {
  return (
    <>
      {includeQuotation && <Quotation invoiceData={invoiceData} />}
      <Box
        sx={{
          px: 4,
          py: 5,
          fontFamily: "Arial, sans-serif",
          fontSize: 14,
          bgcolor: "#fff",
          color: "#000",
          position: "relative",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, textDecoration: "underline" }}>
          TERMS AND CONDITIONS:
        </Typography>

        <Box sx={{ lineHeight: 1.8 }}>
          <Typography><strong>Prices :</strong></Typography>
          <Typography ml={2}>{invoiceData?.terms?.
prices}</Typography>

          <Typography mt={2}><strong>Downpayments :</strong></Typography>
          <Typography ml={2}>{invoiceData?.terms?.downpayments}</Typography>

          <Typography mt={2}><strong>Quality :</strong></Typography>
          <Typography ml={2}>{invoiceData?.terms?.
quality}</Typography>
         
         

          <Typography mt={2}><strong>Payment Terms :</strong></Typography>

 <Typography ml={2}>{invoiceData?.terms?.


paymentTerms

}</Typography>
          
        
         
         
          
        
          
      
        

          <Typography mt={2}><strong>Warranty :</strong></Typography>
         <Typography ml={2}>{invoiceData?.terms?.

warranty
}</Typography>

          <Typography mt={2}><strong>Confidentiality of information :</strong></Typography>
          <Typography ml={2}>{invoiceData?.terms?.confidentiality

}</Typography>

          <Typography mt={2}><strong>Mediation :</strong></Typography>
          <Typography ml={2}>{invoiceData?.terms?.
mediation
}</Typography>
          
     
        </Box>

        {/* Signature Area */}
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography><strong>Yours faithfully,</strong></Typography>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="right">
            <Typography><em>I acknowledge the payment terms</em></Typography>
          </Grid>

          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6} textAlign="right">
            <Typography><em>I acknowledge the copy of the contract</em></Typography>
          </Grid>

          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6} textAlign="right">
            <Typography fontWeight="bold">Agreed & Confirmed By:</Typography>
              <Grid item textAlign="right">
            <Typography variant="body2">contractor
: {invoiceData ?.signatures?.contractor
?.name

}</Typography>
            <Typography variant="body2">SignatureUrl: {invoiceData?.signatures?.contractor
?.signatureUrl}</Typography>
          </Grid>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4 }} />


        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="body2">Stylemyspace Pte Ltd: Addison Chai</Typography>
          </Grid>
          <Grid item textAlign="right">
            <Typography variant="body2">Customer: {invoiceData ?.signatures?.customer?.name

}</Typography>
            <Typography variant="body2">SignatureUrl: {invoiceData?.signatures?.customer?.signatureUrl}</Typography>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="body2">Yours Faithfully<br />Stylemyspace Pte Ltd</Typography>
          
      
        </Box>


          <Box display="flex" justifyContent="space-between" mt={2}>
           <Typography variant="body2">Total: {invoiceData?.subTotal
}</Typography>
      
        </Box>
      </Box>

      <Box sx={{ height: 40, pageBreakAfter: "always" }} />
    </>
  );
};





const TestingUI= ({invoiceData}) => {
  console.log(invoiceData)
  return (
    <Box sx={{ bgcolor: "#f5f5f5", p: 2 }}>
    
    
      <HackingWorksComponent includeQuotation={true} invoiceData={invoiceData} />
      <TermsConditions includeQuotation={true} invoiceData={invoiceData} />
    </Box>
  );
};

export default TestingUI;

