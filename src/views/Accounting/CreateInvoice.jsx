// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   Stack,
//   Divider,
//   IconButton,
//   Grid,
//   Paper,
//   Checkbox,
//   FormControlLabel
// } from "@mui/material";
// import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
// import axiosInstance from "api/axiosInstance";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Stack,
  IconButton,
  Grid,
  Paper,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  Snackbar,
  Alert,
    List,
  ListItemButton,
  ListItemText,
  ListItem

} from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";
import axiosInstance from "api/axiosInstance";

const servicesData = {
  "Hacking Works": [
    {
      heading:
        "Supply labour and tool to hack/ dismantle away the following item:",
      items: [
        "Living & Dining Hall: floor tile & skirting",
        "3 Bedrooms: floor tile/parquet/laminate & skirting",
        "Kitchen: floor & wall tile, kitchen cabinet, work top & fitting",
        "Master Bathroom: floor & wall tile, sanitary, vanity, screen & fitting",
        "Common Bathroom: floor & wall tile, sanitary, vanity, screen & fitting",
        "Utility Bathroom: floor & wall tile, sanitary, vanity, screen & fitting",
        "Balcony: floor tile & skirting",
        "Yard: floor tile & skirting Kitchen & Bathrooms false ceiling included (condo / private house)",
      ],
    },
    {
      heading: "Additional hacking work for:",
      items: ["Ceiling", "Cornices work", "Carpentry work", "Wardrobe"],
    },
  ],
  "Masonry Works": [
    {
      heading: "Make good and plaster smooth affected areas for the following:",
      items: [
        "a) between Master Bedroom and Bedroom 2 (refer to item A01)",
        "b) constructed new door-way for Kitchen",
      ],
    },
    {
      heading:
        "Construct concrete wall with red brick wall c/w smooth plastering for:",
      items: [
        "To seal up existing (Store / ??) entrance using 63mm hollow block for HDB, red bricks for private",
        "b) box up shower wall with recess design",
        "c) box up suspended toilet bowl wall with wall tile finish",
        "d) construct bathtub support with wall tile finish at ...",
        "e)Top up Balcony floor level using light weight block to level Balcony with Living",
      ],
    },
    {
      heading:
        'Apply water-proofing membrane includes "NS grout, "Quick seal 104, "Pre-packed 3-in-1 water-proof screed" for the following:',
      items: [
        "a) Kitchen sink area",
        "b) Master Bathroom with an up-turn of 150mm against wall",
        "c) Common Bathroom with an up-turn of 150mm against wall",
        "d) Utility toilet",
        "e) Kitchen with an up-turn of 300mm against wall",
        "d) Master Bathroom with an up-turn of 300mm against wall",
        "e) Common Bathroom with an up-turn of 300mm against wall",
        "f)Utility Bathroom with an up-turn of 300mm against wall",
        "g)Yard with an up-turn of 300mm against wall",
        "h)Balcony with an up-turn of 300mm against wall",
        "i)Water bonding test",
      ],
    },
    {
      heading: "Construct H50mm base with tiles finish for the following:",
      items: [
        "a)Kitchen cabinet",
        "b)Fridge",
        "c)Washing machine",
        "d)Recess base D200mm x H200mm",
      ],
    },
    {
      heading:
        "To lay/ overlay Homogeneous wall tile price (≤$ 3.50/ sqft) up to ceiling height for:",
      items: [
        "a) Kitchen (charges lay for expose area only)",
        "b) Master Bathroom",
        "c) Common Bathroom",
        "d)Utility Bathroom",
      ],
    },
    {
      heading:
        "Lay heavy duty non-slip Homogeneous floor tile price (≤$ 3.50/ sqft)",
      items: [
        "Or",
        "To lay heavy duty non-slip Homogeneous floor tile price (≤$ 3.50/ sqft) using 3 in 1 waterproofing prepack with W1 strengthener for:",
        "W1 strengthener for:",
        "a)Kitchen",
        "b)Service Balcony",
        "c)Service Balcony",
        "d)Yard",
        "e)Master Bathroom (price include kerb / drop level)",
        "f)Common Bathroom (price include kerb / drop level)",
      ],
    },
    {
      heading:
        "Lay heavy duty polished Homogeneous floor tile price (≤$ 3.50/ sqft) include skirting with W1 strengthener for:",
      items: [
        "Or",
        "To lay heavy duty polished Homogeneous floor tile price (≤$ 3.50/ sqft) using 2in1 prepack with W1 strengthener include skirting for:",
        "a)Foyer",
        "b)Living",
        "c)Dining",
        "d)Master Room",
        "e)Room 2",
        "f)Room 3",
        "g)Room 4",
        "h)Study Room",
        "i)Store Room",
        "j) 3 Bedrooms",
      ],
    },
    {
      heading: "To lay design/pattern tile price (≤$ 4.50/ sqft) for:",
      items: [
        "or",
        "To lay feature’s tile price (≤$ 4.50/ sqft) at following:",
        "a)Areas …",
      ],
    },
  ],
  "Electrical Works": [
    {
      heading: "To give exact quote after confirmation of drawing/requirement:",
      items: [
        "charges base on relocate, new point, existing point or design require after 3D proposed",
        "remove previous electric work",
      ],
    },
  ],
  "Plastering Works": [
    {
      heading: "Plastering Works : (price include materials & labour)",
      items: [
        "a)To plaster whole house wall and ceiling using Ultra-Hard stopping compound include PVC angle-bead for all corners beam, pillars and wall",
        "b)Supply labour to plaster ( ) (wall / ceiling) using Ultra-Hard stopping compound",
      ],
    },
  ],
  "Plumbing Works": [
    {
      heading:
        "Run new conceal copper pipe with BCA require regulation for the following area:",
      items: [
        "a) Kitchen (cold water pipe only)",
        "b)Master Bathroom (hot & cold)",
        "c)Common Bathroom (hot & cold)",
        "d)Utility Bathroom (cold water pipe only)",
      ],
    },
    {
      heading:
        "To run new stainless steel pipe (single line piping) for the following:",
      items: ["Kitchen", "Master Bathroom", "Common Bathroom"],
    },
    {
      heading: "Run extra hot water point for the following:",
      items: [
        "a) Kitchen sink",
        "b)To install conceal bath mixers for: Master Bath, Common Bath",
        "c)Supply labour to levelling, structure bathtub & run drain pipe at Master Bathroom",
        "d)Master Bath basin, Common Bath basin",
      ],
    },
    {
      heading: "Extend water inlet point for the following:",
      items: [
        "Water dispenser point (no outlet require)",
        "New Kitchen sink location",
        "Gas Heater location / New tank heater location",
        "Extra basin at Balcony",
      ],
    },
    {
      heading: "Labour to conceal embedded bath mixers / top rain shower for:",
      items: [
        "Master Bathroom",
        "Common Bathroom",
        "To levelling, structure bathtub & run drain pipe at Master Bathroom",
        "To levelling, structure wall hung toilet bowl at …",
      ],
    },
    {
      heading:
        'Supply "labour only" to install the following: (products provided by owner)',
      items: [
        "a) Kitchen sink & tap",
        "b) Washing machine tap",
        "c) Toilet bowl",
        "d) Basins & taps /Vanity basin & tap",
        "e) Storage heater / Instant heater",
        "f) Bath's mixer & rain shower set / bathtub connnection",
        "g) Accessories",
        "h) Bidet sprays & valves",
        "i)Alter and convert squat pan to sitting bowl for Common Bathroom",
        "Convert squat pan to sitting bowl for: .....",
      ],
    },
    {
      heading: "Run uPVC pipe outlets pipe for the following:",
      items: [
        "a) Kitchen, washing machine, 3 Bathrooms",
        "Replace existing cast-iron sewage pipe to uPVC sewerage pipe for:",
        "Kitchen / 2 Bathrooms",
      ],
    },
  ],
  "Air-conditioning": [
    {
      items: ["Refering to in-house supplier"],
    },
  ],
  "Ceiling / Partition Works": [
    {
      heading:
        "Install proposed design false ceiling with galvanised steel support for:",
      items: [
        "Foyer= false ceiling",
        "Living Hall= false ceiling with light pelmet/L-box",
        "Dining Hall= false ceiling with light pelmet/L-box",
        "Master Room=",
        "Room 2=",
        "Room 3=",
        "Kitchen & 3 Bathrooms= false ceiling with access hole",
      ],
    },
    {
      heading: "Install curtain pelmet/ aircon pelmet for:",
      items: [],
    },
    {
      heading:
        "Erect double side gymsum board partition wall (full height) for:",
      items: [],
    },
    {
      heading: "Install decorative beading design on:",
      items: [],
    },
    {
      heading:
        'To install waterproof "calcium silicate board" to box up sewage pipe for:',
      items: [],
    },
    {
      heading: "Seal up recess using gymsum board",
      items: [],
    },
    {
      heading: "To box up ( area) ….. with light pelmet design",
      items: [],
    },
  ],
  "Painting Works": [
    {
      heading:
        "Material Guide: (Nippon Vinilex5000 for wall, max 5 colours for whole house) price include touch up when completion, enhance straight line, patch up hole  (static)",
      items: [
        "Paint whole house ceiling and wall",
        "Paint all door frames, pipe using Nippon glossy paint",
      ],
    },
    {
      heading: "To paint room's door for:",
      items: [
        "Apply oil sealer base coating for whole house plastered area before paint",
      ],
    },
  ],
  "Aluminium Works": [
    {
      heading:
        "Install (NA/BA/white powder-coated) colour framed sliding window c/w (clear/grey/tea/blue/green/black) glass for the following:-",
      items: [
        "a) Living Hall (4 panels with 2 tracks)",
        "b) Dining Hall (4 panels with 4 tracks)",
        "c) Study Room (4 panels with 2 tracks)",
        "d) Kitchen (3 panels with 3 tracks",
        "e)Master Bedroom (3 way / 2 way)",
        "f)Room 2 (3 way / 2 way)",
        "g)Room 3 (3 way / 2 way)",
      ],
    },
    {
      heading:
        "Install (NA/BA/white powder-coated) colour framed casement window c/w (clear/grey/tea/blue/green/black) glass for the following:-",
      items: [
        "a) Living Hall",
        "b) Dining Hall",
        "c) Study Room",
        "d) Kitchen",
        "e) Master Bedroom",
        "f) Room 2",
        "g) Room 3",
      ],
    },
    {
      heading:
        "Install (NA/BA/white powder-coated) colour framed (adjustable/fix) louver / side hung window c/w wire-mess glass for the following:",
      items: ["Master Bathroom", "Common Bathroom", "Others"],
    },
    {
      items: [
        "Install built-in KDK exhaust fan (6” / 8”)",
        "Top up using laminated glass",
        "To upgrade window to Double Glazed glass for:",
        "To upgrade window lock to Multi lock-set for:",
        "To upgrade window frame to Alpha material size:",
        "To install heavy duty top hanging track ULTRA SLIM SYNCHRONISED sliding door with soft close & clear tempered glass for:",
        "To install heavy duty top hanging track ULTRA SLIM TELESCOPIC (2 FIXED, 2 MIDDLE SLIDE) sliding door with soft close & clear tempered glass for:",
      ],
    },
  ],
  "Metal / Iron Works": [
    {
      items: [
        "Install solid wrought iron gate c/w lock-set for main entrance size: ....",
        "Install powder coated color mild steel designer gate c/w lock-set for main entrance size: …",
      ],
    },
  ],
  "Glass / Mirror Works": [
    {
      heading:
        "Install frameless/matt black framed 10mm tempered glass casement door shower screen includes stainless steel towel bar for the following:",
      items: ["a)Master Bathroom", "b)Common Bathroom"],
    },
    {
      heading:
        "Install frameless/matt black framed 10mm tempered glass sliding door shower screen includes heavy duty stainless steel top hanging track for the following:",
      items: ["a) Master Bathroom", "b) Common Bathroom"],
    },
    {
      heading:
        "Install frameless/matt black framed 10mm tempered glass casement door with (sand-blasting / laminated / spray paint) c/w stainless steel handle for the door way at:",
      items: [
        "a) Master Bathroom",
        "b) Common Bathroom",
        "c)To install Fix panel clear tempered glass screen in frameless/frame design at: …… size: ……",
      ],
    },
    {
      heading: "Install 6mm (spray paint) colour tempered glass backing for:",
      items: ["Between Kitchen top and bottom cabinet"],
    },
  ],
  "Door Works": [
    {
      heading: "Supply & install new door frame for:",
      items: [],
    },
    {
      heading:
        "Install solid nyatoh door (size:..) c/w lock-set, stopper and lacquer finish for:",
      items: ["a) Master Bedroom, Bedroom 2, Bedroom 3"],
    },
    {
      heading:
        "Install (hollow/solid core) door in Melamine (size:...) finish c/w lock-set, stopper for:",
      items: ["a) Master Bedroom, Bedroom 2, Bedroom 3"],
    },
    {
      items: [
        "Install WTP door include (Door frame + Architrave + Door) c/w lock-set, stopper for:",
      ],
    },
    {
      items: ["Install WTP door include lock-set, stopper for:"],
    },
    {
      heading:
        "Install (non/ 1/2 hour) fire rated door in (Nyatoh/Veneer/Melamine) finish main door c/w press lock-set for the following:",
      items: [
        "a) Main door",
        "b)Apply achitrave trims for both side ($120 per) for:",
      ],
    },
    {
      items: [
        "c)Supply and install Slide & Swing PD door in ( ) series at:",
        "d)Supply and install aluminium Bi-fold door in ( ) at:",
        "e)Supply and install ….",
      ],
    },
  ],
  "Timber Flooring": [
    {
      heading:
        "Lay Burmese/Indonesia teak parquet (size: ....) include sanding and varnishing for:",
      items: [
        "a) 3 Bedrooms",
        "b)Supply & install timber wood skirting profile H100mm for above's room",
        "c)Staircase step (with / without riser)",
        "d)Staircase step using long cut size teak piece",
      ],
    },
    {
      heading:
        "Supply labour & tools to apply sanding, varnishing existing parquet floor for:",
      items: [
        "a)3 Bedrooms",
        "b)Staircase step (with/ without riser)",
        "c)Lay Burmese/Indonesia teak parquet (size: ....) (with/without) riser include skirting, sanding and varnishing for Staircase step",
        "d)Lay long strip teak timber (size) (with/without) riser include skirting, sanding and varnishing for Staircase step",
        "e)Supply & repair, replace existing damage parquet for: .....",
      ],
    },
    {
      heading:
        "Supply material to (repair / replace / make good) existing damage parquet for:",
      items: [
        "Lay new parquet joint existing c/w revarnishing the whole areas",
      ],
    },
    {
      heading: "Other’s timber floor works:",
      items: [
        "To construct platform at Height (6” / …) (with / without) light pelmet) at:",
        "To lay outdoor water resistance Chengai wood flooring at: Balcony",
        "To lay outdoor water resistance Composite wood flooring at: Balcony",
      ],
    },
  ],
  "Vinyl Board": [
    {
      heading:
        "To lay 5mm thick quality water resistant vinyl floorboard include skirting/no skirting for the following:",
      items: [
        "a) Foyer, Living, Dining, Passage way, Store& Bedroom corridors",
        "b) 3 Bedrooms",
        "c)Staircase step (with / without riser)",
        "d)Alteration for existing door due to overlay",
      ],
    },
    {
      heading: "Other’s floor works:",
      items: [
        "To construct platform at Height (6” / …) (with / without) light pelmet) at:",
      ],
    },
  ],
  "Polishing Floor Works": [
    {
      heading:
        "Supply labour & tools to apply diamond polishing on existing Marble floor at:",
      items: ["a)Foyer, Living, Dining & Bedroom corridors", "b)Others"],
    },
    {
      heading:
        "Supply labour & tools to regrouting & polishing existing Homogeneous floor at:",
      items: [
        "a)Foyer, Living, Dining & Bedroom corridors",
        "b) Bedrooms",
        "c)Others",
      ],
    },
  ],
  "Carpentry Works": [
    {
      heading: "Material Guide Use On Carpentry Works :-",
      items: [],
    },
    {
      heading: "Solid Ply-wood",
      items: [],
    },
    {
      heading: "Laminate finish, unless stated otherwise",
      items: [],
    },
    {
      heading: "ABS trimming for all doors",
      items: [],
    },
    {
      heading: "Internal color pvc carcass",
      items: [],
    },
    {
      heading: "Soft close hinges for doors",
      items: [],
    },
    {
      heading: "Fully extend track for all drawers, unless stated otherwise",
      items: [],
    },
    {
      heading: "Drawer's wood base: 15mm strengthen base",
      items: [],
    },

    {
      heading: "Foyer Area",
      items: [
        "Install proposed design built-in shoe cabinet in full height",
        "Install proposed design built-in feature wall/cabinet include tip-on door access to Home Shelter",
        "Box up Home Shelter door with feature wall / cabinet",
        "Settee with storage",
        "Mirror feature wall with light pelmet",
      ],
    },
    {
      heading: "Living Area",
      items: [
        "Install proposed design built-in TV feature wall using laminate combination with design in full height/half height",
        "Install proposed design built-in (suspended/non-suspended) TV console",
        "Display cabinet",
        "TV Cabinet with open shelve design",
        "Suspended TV console",
        "Other",
      ],
    },
    {
      heading: "Dining Area",
      items: [
        "Install proposed design built-in TV feature wall using laminate combination with design in full height/half height",
        "Install proposed design built-in (suspended/non-suspended) TV console",
        "Mirror feature wall with ……",
        "Settee cabinet with (laminate backing / cushion back) design",
        "Pantry cabinet",
        "Display cabinet",
        "Others…",
      ],
    },
    {
      heading: "Kitchen Area",
      items: [
        "Install proposed design built-in kitchen cabinet including of:",
        "Stainless steel dishrack",
        "PVC cutlery tray",
        "Max 4 nos of drawers include Blum runner",
        "1 nos. of glass doors include Blum HK lift up mechanism",
        "Top hung cabinet",
        "Bottom cabinet (max 4 nos drawers)",
        "Counter cabinet",
        "Island cabinet",
        "Full height cabinet / Tall unit for Oven / Microwave",
        "Box up piping",
        "Light Switches Box",
        "FOC Stainless steel dishrack x 1",
        "FOC Aluminium glass door x 1",
        "FOC PVC cutlery tray",
        "FOC Blum soft close runner x 4 set",
        "FOC Blum HK soft close lift system x 1 set",
        "Others: …",
        "Install proposed design built-in kitchen tall unit for oven/microwave compartment",
      ],
    },
    {
      heading: "Master Room Area",
      items: [
        "Install proposed design full height built-in wardrobe in (casement/30mm thick slide//aluminium frame with glass slide) door include:",
        "Hanging rods",
        "Shelves",
        "Max 4 nos drawers",
        "Fabricate and install (Queen/King) size built-in bed-frame using laminate finish include bottom drawers",
        "Install proposed design (size: .............low/full height) built-in head-board using laminate finish combine (glass/mirror/cushion/fabric) décor",
        "Install (low/suspended) built-in bedside table using laminate finish",
      ],
    },
    {
      heading: "Room 2 Area",
      items: [
        "(Casement / 30mm thick sliding / Aluminium frame glass) door wardrobe include of:",
        "FOC Hanging rods / shelves / max 4 set drawers",
        "(Queen/King/ SS/ Single) size built-in bed-frame using laminate c/w bottom drawers",
        "Platform bed with storage below",
        "Custom headboard using (laminate / glass / mirror/ pvc / fabric cushion) finish design",
        "Bedside table in (suspended / low) design",
        "Feature wall design",
        "Dresser",
        "Top hung book shelve",
        "Suspended study table",
        "Others:…",
      ],
    },
    {
      heading: "Room 3 Area",
      items: [
        "(Casement / 30mm thick sliding / Aluminium frame glass) door wardrobe include of:",
        "FOC Hanging rods / shelves / max 4 set drawers",
        "(Queen/King/ SS/ Single) size built-in bed-frame using laminate c/w bottom drawers",
        "Platform bed with storage below",
        "Custom headboard using (laminate / glass / mirror/ pvc / fabric cushion) finish design",
        "Bedside table in (suspended / low) design",
        "Feature wall design",
        "Dresser",
        "Top hung book shelve",
        "Suspended study table",
        "Others:…",
      ],
    },
  ],
  "Work Top Works": [
    {
      heading:
        "Install promotion series Quartz top c/w back-splash skirting in (20mm/40mm) profile include opening of holes for the following:",
      items: [
        "Kitchen top",
        "Counter max depth 700mm / Island",
        "Panty top",
        "Master Bath vanity",
        "Common Bath vanity",
        "Bay window top",
        "Others:…",
      ],
    },
    {
      heading:
        "Install EDL Compact top in (6mm / downturn) profile include opening of holes for the following:",
      items: ["Kitchen top", "Others:…"],
    },
    {
      heading:
        "Install Backing using (Compact / Sintered stone / Quartz / cerarl panel) for the following:",
      items: ["Between Kitchen top & bottom cabinet", "Feature wall"],
    },
  ],

  "General Works": [
    {
      items: [
        "To do chemical washing on 1st stage (before carpentry deliver)",
        "Supply labour and material to do general cleaning upon completion",
        "Haulage & Debris Removal",
        "To lay corrugated paper protection for affected area",
        "Inspection upon completion",
      ],
    },
  ],
  "MISCELLANEOUS WORKS": [
    {
      items: [
        "Replacement existing rubbish chute",
        "Supply scaffolding for work progress",
        "Labour fees top up for carry up materials full piece no joints to storey ( … )",
        "Labour fees top up for non-lift level unit",
      ],
    },
  ],
};

// function CreateInvoice({ category, onClose }) {
//   const [selectedCategories, setSelectedCategories] = useState([]); // multiple categories
//   const [data, setData] = useState({});
//   const [newCategory, setNewCategory] = useState("");

//   // Add first category from parent (only once)
//   useEffect(() => {
//     if (category && !selectedCategories.includes(category)) {
//       setSelectedCategories([category]);
//     }
//   }, [category]);

//   // Handle input change
//   const handleChange = (category, item, field, value) => {
//     setData((prev) => ({
//       ...prev,
//       [category]: {
//         ...prev[category],
//         [item]: { ...prev[category]?.[item], [field]: value },
//       },
//     }));
//   };

//   // Add another category (cannot duplicate)
//   const handleAddCategory = () => {
//     if (newCategory && !selectedCategories.includes(newCategory)) {
//       setSelectedCategories([...selectedCategories, newCategory]);
//       setNewCategory("");
//     }
//   };

//   return (
//     <form>
//       {/* Add more category dropdown */}

//       {/* Render all selected categories */}
//       {selectedCategories.map((catName, catIndex) => (
//         <Box key={catIndex} mb={4}>
//           {/* Category title */}
//           <Typography
//             variant="h5"
//             sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
//           >
//             {catName}
//           </Typography>

//           {/* Category Groups */}
//           {servicesData[catName]?.map((group, index) => (
//             <Box key={index} mb={3}>
//               <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
//                 {group.heading}
//               </Typography>
//               {group.items.map((item, iIndex) => (
//                 <Box
//                   key={iIndex}
//                   mb={2}
//                   p={2}
//                   border="1px solid #ddd"
//                   borderRadius="6px"
//                 >
//                   <Typography sx={{ mb: 1 }}>{item}</Typography>
//                   <TextField
//                     fullWidth
//                     label="Description"
//                     size="small"
//                     sx={{ mb: 1 }}
//                     value={data[catName]?.[item]?.description || ""}
//                     onChange={(e) =>
//                       handleChange(catName, item, "description", e.target.value)
//                     }
//                   />
//                   <TextField
//                     fullWidth
//                     label="Quantity"
//                     type="number"
//                     size="small"
//                     sx={{ mb: 1 }}
//                     value={data[catName]?.[item]?.quantity || ""}
//                     onChange={(e) =>
//                       handleChange(catName, item, "quantity", e.target.value)
//                     }
//                   />
//                   <TextField
//                     fullWidth
//                     label="Price"
//                     type="number"
//                     size="small"
//                     value={data[catName]?.[item]?.price || ""}
//                     onChange={(e) =>
//                       handleChange(catName, item, "price", e.target.value)
//                     }
//                   />
//                 </Box>
//               ))}
//             </Box>
//           ))}
//         </Box>
//       ))}

//       <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
//         <Select
//           fullWidth
//           value={newCategory}
//           onChange={(e) => setNewCategory(e.target.value)}
//           displayEmpty
//         >
//           <MenuItem value="">
//             <em>-- Select Category --</em>
//           </MenuItem>
//           {Object.keys(servicesData)
//             .filter((cat) => !selectedCategories.includes(cat))
//             .map((cat) => (
//               <MenuItem key={cat} value={cat}>
//                 {cat}
//               </MenuItem>
//             ))}
//         </Select>

//         <Button variant="outlined" type="button" onClick={handleAddCategory}>
//           + Add More Service
//         </Button>
//       </Stack>

//       {/* Save & Cancel */}
//       {selectedCategories.length > 0 && (
//         <Stack direction="row" justifyContent="flex-end" spacing={2}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             onClick={() => console.log("Invoice Data:", data)}
//           >
//             Save
//           </Button>
//           <Button
//             type="button"
//             variant="outlined"
//             color="error"
//             onClick={onClose}
//           >
//             Cancel
//           </Button>
//         </Stack>
//       )}
//     </form>
//   );
// }

// export default CreateInvoice;


// function CreateInvoice({ onClose, customerInfo }) {
//   const [invoiceItems, setInvoiceItems] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [paymentMethods, setPaymentMethods] = useState({
//     paynowKey: "",
//     internetTransfer: "",
//     cheque: ""
//   });
//   const [terms, setTerms] = useState({
//     prices: "",
//     downpayments: "",
//     quality: "",
//     paymentTerms: "",
//     warranty: "",
//     confidentiality: "",
//     mediation: ""
//   });
//   const [signatures, setSignatures] = useState({
//     contractor: {
//       name: "",
//       signatureUrl: ""
//     },
//     customer: {
//       name: customerInfo.customer.name || "",
//       agreed: false,
//       signatureUrl: ""
//     }
//   });
//   const [notes, setNotes] = useState("");
//   const [status, setStatus] = useState("draft");

//   // Calculate totals
//   const subTotal = invoiceItems.reduce((sum, item) => sum + (item.quantity * item.amount), 0);
//   const gst = subTotal * 0.09; // 9% GST
//   const grandTotal = subTotal + gst;

//   // Fetch categories from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axiosInstance.get("/api/categories");
//         setCategories(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         setLoading(false);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Add a new invoice item
//   const handleAddItem = () => {
//     setInvoiceItems([...invoiceItems, {
//       category: "",
//       title: "",
//       workDescription: "",
//       quantity: 1,
//       amount: 0
//     }]);
//   };

//   // Update an invoice item
//   const handleItemChange = (index, field, value) => {
//     const updatedItems = [...invoiceItems];
//     updatedItems[index] = {
//       ...updatedItems[index],
//       [field]: field === 'quantity' || field === 'amount' ? Number(value) : value
//     };
    
//     // If category changes, update the title
//     if (field === 'category') {
//       const selectedCategory = categories.find(cat => cat._id === value);
//       if (selectedCategory) {
//         updatedItems[index].title = selectedCategory.name;
//       }
//     }
    
//     setInvoiceItems(updatedItems);
//   };

//   // Remove an invoice item
//   const handleRemoveItem = (index) => {
//     const updatedItems = [...invoiceItems];
//     updatedItems.splice(index, 1);
//     setInvoiceItems(updatedItems);
//   };

//   // Handle signature agreement change
//   const handleSignatureAgreement = (e) => {
//     setSignatures({
//       ...signatures,
//       customer: {
//         ...signatures.customer,
//         agreed: e.target.checked
//       }
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const invoiceData = {
//       referenceNo: customerInfo.referenceNo || `INV-${new Date().getFullYear()}-${Math.floor(Math.random() * 900) + 100}`,
//       company: customerInfo.company,
//       customer: customerInfo.customer,
//       date: new Date().toISOString(),
//       hdbLicense: customerInfo.hdbLicense,
//       items: invoiceItems,
//       subTotal,
//       gst,
//       grandTotal,
//       paymentMethods,
//       terms,
//       signatures,
//       notes,
//       status
//     };

//     try {
//       const response = await axiosInstance.post("/api/invoices", invoiceData);
//       console.log("Invoice created:", response.data);
//       onClose(); // Close the modal on success
//       // You might want to add a success notification here
//     } catch (error) {
//       console.error("Error creating invoice:", error);
//       // You might want to add an error notification here
//     }
//   };

//   if (loading) {
//     return <div>Loading categories...</div>;
//   }

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
//       {/* Invoice Items Section */}
//       <Typography variant="h6" gutterBottom>
//         Invoice Items
//       </Typography>
      
//       {invoiceItems.map((item, index) => (
//         <Paper key={index} sx={{ p: 2, mb: 2 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <Select
//                 fullWidth
//                 value={item.category}
//                 onChange={(e) => handleItemChange(index, 'category', e.target.value)}
//                 required
//                 displayEmpty
//               >
//                 <MenuItem value="">
//                   <em>Select Category</em>
//                 </MenuItem>
//                 {categories.map((category) => (
//                   <MenuItem key={category._id} value={category._id}>
//                     {category.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Title"
//                 value={item.title}
//                 onChange={(e) => handleItemChange(index, 'title', e.target.value)}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Work Description"
//                 multiline
//                 rows={2}
//                 value={item.workDescription}
//                 onChange={(e) => handleItemChange(index, 'workDescription', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={6} sm={3}>
//               <TextField
//                 fullWidth
//                 label="Quantity"
//                 type="number"
//                 value={item.quantity}
//                 onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
//                 required
//                 inputProps={{ min: 1 }}
//               />
//             </Grid>
//             <Grid item xs={6} sm={3}>
//               <TextField
//                 fullWidth
//                 label="Amount (SGD)"
//                 type="number"
//                 value={item.amount}
//                 onChange={(e) => handleItemChange(index, 'amount', e.target.value)}
//                 required
//                 inputProps={{ min: 0, step: 0.01 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Total (SGD)"
//                 value={(item.quantity * item.amount).toFixed(2)}
//                 disabled
//               />
//             </Grid>
//             <Grid item xs={12} sx={{ textAlign: 'right' }}>
//               <IconButton onClick={() => handleRemoveItem(index)} color="error">
//                 <DeleteIcon />
//               </IconButton>
//             </Grid>
//           </Grid>
//         </Paper>
//       ))}
      
//       <Button
//         variant="outlined"
//         startIcon={<AddIcon />}
//         onClick={handleAddItem}
//         sx={{ mb: 3 }}
//       >
//         Add Item
//       </Button>

//       {/* Payment Methods Section */}
//       <Typography variant="h6" gutterBottom>
//         Payment Methods
//       </Typography>
//       <Grid container spacing={2} sx={{ mb: 3 }}>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="PayNow Key"
//             value={paymentMethods.paynowKey}
//             onChange={(e) => setPaymentMethods({...paymentMethods, paynowKey: e.target.value})}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="Internet Transfer"
//             value={paymentMethods.internetTransfer}
//             onChange={(e) => setPaymentMethods({...paymentMethods, internetTransfer: e.target.value})}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="Cheque Payment"
//             value={paymentMethods.cheque}
//             onChange={(e) => setPaymentMethods({...paymentMethods, cheque: e.target.value})}
//           />
//         </Grid>
//       </Grid>

//       {/* Terms & Conditions Section */}
//       <Typography variant="h6" gutterBottom>
//         Terms & Conditions
//       </Typography>
//       <Grid container spacing={2} sx={{ mb: 3 }}>
//         {Object.keys(terms).map((termKey) => (
//           <Grid item xs={12} key={termKey}>
//             <TextField
//               fullWidth
//               label={termKey.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//               value={terms[termKey]}
//               onChange={(e) => setTerms({...terms, [termKey]: e.target.value})}
//               multiline
//               rows={2}
//               placeholder={`Enter ${termKey} terms`}
//             />
//           </Grid>
//         ))}
//       </Grid>

//       {/* Signatures Section */}
//       <Typography variant="h6" gutterBottom>
//         Signatures
//       </Typography>
//       <Paper sx={{ p: 2, mb: 3 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Contractor Name"
//               value={signatures.contractor.name}
//               onChange={(e) => setSignatures({
//                 ...signatures,
//                 contractor: {
//                   ...signatures.contractor,
//                   name: e.target.value
//                 }
//               })}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Contractor Signature URL"
//               value={signatures.contractor.signatureUrl}
//               onChange={(e) => setSignatures({
//                 ...signatures,
//                 contractor: {
//                   ...signatures.contractor,
//                   signatureUrl: e.target.value
//                 }
//               })}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={signatures.customer.agreed}
//                   onChange={handleSignatureAgreement}
//                 />
//               }
//               label="I agree to the terms and conditions"
//             />
//           </Grid>
//         </Grid>
//       </Paper>

//       {/* Notes Section */}
//       <TextField
//         fullWidth
//         label="Additional Notes"
//         value={notes}
//         onChange={(e) => setNotes(e.target.value)}
//         multiline
//         rows={3}
//         sx={{ mb: 3 }}
//       />

//       {/* Status Selection */}
//       <Select
//         fullWidth
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//         sx={{ mb: 3 }}
//       >
//         <MenuItem value="draft">Draft</MenuItem>
//         <MenuItem value="sent">Sent</MenuItem>
//         <MenuItem value="confirmed">Confirmed</MenuItem>
//       </Select>

//       {/* Totals Section */}
//       <Paper sx={{ p: 2, mb: 3 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <Typography>Subtotal:</Typography>
//           </Grid>
//           <Grid item xs={6} sx={{ textAlign: 'right' }}>
//             <Typography>SGD {subTotal.toFixed(2)}</Typography>
//           </Grid>
//           <Grid item xs={6}>
//             <Typography>GST (9%):</Typography>
//           </Grid>
//           <Grid item xs={6} sx={{ textAlign: 'right' }}>
//             <Typography>SGD {gst.toFixed(2)}</Typography>
//           </Grid>
//           <Grid item xs={6}>
//             <Typography variant="h6">Grand Total:</Typography>
//           </Grid>
//           <Grid item xs={6} sx={{ textAlign: 'right' }}>
//             <Typography variant="h6">SGD {grandTotal.toFixed(2)}</Typography>
//           </Grid>
//         </Grid>
//       </Paper>

//       {/* Action Buttons */}
//       <Stack direction="row" spacing={2} justifyContent="flex-end">
//         <Button
//           type="button"
//           variant="outlined"
//           color="error"
//           onClick={onClose}
//         >
//           Cancel
//         </Button>
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//         >
//           Save Invoice
//         </Button>
//       </Stack>
//     </Box>
//   );
// }

// export default CreateInvoice;






// function CreateInvoice({ onClose, customerInfo }) {
//   // State for form data
//   const [invoiceItems, setInvoiceItems] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   // Form sections
//   const [paymentMethods, setPaymentMethods] = useState({
//     paynowKey: "",
//     internetTransfer: "",
//     cheque: ""
//   });
//   const [terms, setTerms] = useState({
//     prices: "",
//     downpayments: "",
//     quality: "",
//     paymentTerms: "",
//     warranty: "",
//     confidentiality: "",
//     mediation: ""
//   });
//   const [signatures, setSignatures] = useState({
//     contractor: {
//       name: "",
//       signatureUrl: ""
//     },
//     customer: {
//       name: customerInfo.customer.name || "",
//       agreed: false,
//       signatureUrl: ""
//     }
//   });
//   const [notes, setNotes] = useState("");
//   const [status, setStatus] = useState("draft");

//   // Calculate totals
//   const subTotal = invoiceItems.reduce((sum, item) => sum + (item.quantity * item.amount), 0);
//   const gst = subTotal * 0.09; // 9% GST
//   const grandTotal = subTotal + gst;

//   // Fetch categories from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axiosInstance.get("/api/categories");
//         setCategories(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         setError("Failed to load categories. Please try again.");
//         setLoading(false);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Add a new invoice item
//   const handleAddItem = () => {
//     setInvoiceItems([...invoiceItems, {
//       category: "",
//       title: "",
//       workDescription: "",
//       quantity: 1,
//       amount: 0
//     }]);
//   };

//   // Update an invoice item
//   const handleItemChange = (index, field, value) => {
//     const updatedItems = [...invoiceItems];
//     updatedItems[index] = {
//       ...updatedItems[index],
//       [field]: field === 'quantity' || field === 'amount' ? Number(value) : value
//     };
    
//     // If category changes, update the title
//     if (field === 'category') {
//       const selectedCategory = categories.find(cat => cat._id === value);
//       if (selectedCategory) {
//         updatedItems[index].title = selectedCategory.name;
//       }
//     }
    
//     setInvoiceItems(updatedItems);
//   };

//   // Remove an invoice item
//   const handleRemoveItem = (index) => {
//     const updatedItems = [...invoiceItems];
//     updatedItems.splice(index, 1);
//     setInvoiceItems(updatedItems);
//   };

//   // Handle signature agreement change
//   const handleSignatureAgreement = (e) => {
//     setSignatures({
//       ...signatures,
//       customer: {
//         ...signatures.customer,
//         agreed: e.target.checked
//       }
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setError(null);
    
//     // Prepare the invoice data
//     const invoiceData = {
//       referenceNo: customerInfo.referenceNo || `INV-${new Date().getFullYear()}-${Math.floor(Math.random() * 900) + 100}`,
//       company: customerInfo.company,
//       customer: customerInfo.customer,
//       date: new Date().toISOString(),
//       hdbLicense: customerInfo.hdbLicense,
//       items: invoiceItems,
//       subTotal,
//       gst,
//       grandTotal,
//       paymentMethods,
//       terms,
//       signatures,
//       notes,
//       status
//     };

//     try {
//       // Make the API call
//       const response = await axiosInstance.post("/api/invoices", invoiceData);
      
//       // Handle success
//       console.log("Invoice created:", response.data);
//       setSuccess(true);
      
//       // Close the modal after 2 seconds
//       setTimeout(() => {
//         onClose();
//       }, 2000);
      
//     } catch (error) {
//       console.error("Error creating invoice:", error);
//       setError(error.response?.data?.message || "Failed to create invoice. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Close snackbar
//   const handleCloseSnackbar = () => {
//     setError(null);
//     setSuccess(false);
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
//       {/* Invoice Items Section */}
//       <Typography variant="h6" gutterBottom>
//         Invoice Items
//       </Typography>
      
//       {invoiceItems.map((item, index) => (
//         <Paper key={index} sx={{ p: 2, mb: 2 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <Select
//                 fullWidth
//                 value={item.category}
//                 onChange={(e) => handleItemChange(index, 'category', e.target.value)}
//                 required
//                 displayEmpty
//               >
//                 <MenuItem value="">
//                   <em>Select Category</em>
//                 </MenuItem>
//                 {categories.map((category) => (
//                   <MenuItem key={category._id} value={category._id}>
//                     {category.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Title"
//                 value={item.title}
//                 onChange={(e) => handleItemChange(index, 'title', e.target.value)}
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Work Description"
//                 multiline
//                 rows={2}
//                 value={item.workDescription}
//                 onChange={(e) => handleItemChange(index, 'workDescription', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={6} sm={3}>
//               <TextField
//                 fullWidth
//                 label="Quantity"
//                 type="number"
//                 value={item.quantity}
//                 onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
//                 required
//                 inputProps={{ min: 1 }}
//               />
//             </Grid>
//             <Grid item xs={6} sm={3}>
//               <TextField
//                 fullWidth
//                 label="Amount (SGD)"
//                 type="number"
//                 value={item.amount}
//                 onChange={(e) => handleItemChange(index, 'amount', e.target.value)}
//                 required
//                 inputProps={{ min: 0, step: 0.01 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Total (SGD)"
//                 value={(item.quantity * item.amount).toFixed(2)}
//                 disabled
//               />
//             </Grid>
//             <Grid item xs={12} sx={{ textAlign: 'right' }}>
//               <IconButton onClick={() => handleRemoveItem(index)} color="error">
//                 <DeleteIcon />
//               </IconButton>
//             </Grid>
//           </Grid>
//         </Paper>
//       ))}
      
//       <Button
//         variant="outlined"
//         startIcon={<AddIcon />}
//         onClick={handleAddItem}
//         sx={{ mb: 3 }}
//       >
//         Add Item
//       </Button>

//       {/* Payment Methods Section */}
//       <Typography variant="h6" gutterBottom>
//         Payment Methods
//       </Typography>
//       <Grid container spacing={2} sx={{ mb: 3 }}>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="PayNow Key"
//             value={paymentMethods.paynowKey}
//             onChange={(e) => setPaymentMethods({...paymentMethods, paynowKey: e.target.value})}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="Internet Transfer"
//             value={paymentMethods.internetTransfer}
//             onChange={(e) => setPaymentMethods({...paymentMethods, internetTransfer: e.target.value})}
//           />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <TextField
//             fullWidth
//             label="Cheque Payment"
//             value={paymentMethods.cheque}
//             onChange={(e) => setPaymentMethods({...paymentMethods, cheque: e.target.value})}
//           />
//         </Grid>
//       </Grid>

//       {/* Terms & Conditions Section */}
//       <Typography variant="h6" gutterBottom>
//         Terms & Conditions
//       </Typography>
//       <Grid container spacing={2} sx={{ mb: 3 }}>
//         {Object.keys(terms).map((termKey) => (
//           <Grid item xs={12} key={termKey}>
//             <TextField
//               fullWidth
//               label={termKey.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//               value={terms[termKey]}
//               onChange={(e) => setTerms({...terms, [termKey]: e.target.value})}
//               multiline
//               rows={2}
//               placeholder={`Enter ${termKey} terms`}
//             />
//           </Grid>
//         ))}
//       </Grid>

//       {/* Signatures Section */}
//       <Typography variant="h6" gutterBottom>
//         Signatures
//       </Typography>
//       <Paper sx={{ p: 2, mb: 3 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Contractor Name"
//               value={signatures.contractor.name}
//               onChange={(e) => setSignatures({
//                 ...signatures,
//                 contractor: {
//                   ...signatures.contractor,
//                   name: e.target.value
//                 }
//               })}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Contractor Signature URL"
//               value={signatures.contractor.signatureUrl}
//               onChange={(e) => setSignatures({
//                 ...signatures,
//                 contractor: {
//                   ...signatures.contractor,
//                   signatureUrl: e.target.value
//                 }
//               })}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={signatures.customer.agreed}
//                   onChange={handleSignatureAgreement}
//                   required
//                 />
//               }
//               label="I agree to the terms and conditions"
//             />
//           </Grid>
//         </Grid>
//       </Paper>

//       {/* Notes Section */}
//       <TextField
//         fullWidth
//         label="Additional Notes"
//         value={notes}
//         onChange={(e) => setNotes(e.target.value)}
//         multiline
//         rows={3}
//         sx={{ mb: 3 }}
//       />

//       {/* Status Selection */}
//       <Select
//         fullWidth
//         value={status}
//         onChange={(e) => setStatus(e.target.value)}
//         sx={{ mb: 3 }}
//       >
//         <MenuItem value="draft">Draft</MenuItem>
//         <MenuItem value="sent">Sent</MenuItem>
//         <MenuItem value="confirmed">Confirmed</MenuItem>
//       </Select>

//       {/* Totals Section */}
//       <Paper sx={{ p: 2, mb: 3 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <Typography>Subtotal:</Typography>
//           </Grid>
//           <Grid item xs={6} sx={{ textAlign: 'right' }}>
//             <Typography>SGD {subTotal.toFixed(2)}</Typography>
//           </Grid>
//           <Grid item xs={6}>
//             <Typography>GST (9%):</Typography>
//           </Grid>
//           <Grid item xs={6} sx={{ textAlign: 'right' }}>
//             <Typography>SGD {gst.toFixed(2)}</Typography>
//           </Grid>
//           <Grid item xs={6}>
//             <Typography variant="h6">Grand Total:</Typography>
//           </Grid>
//           <Grid item xs={6} sx={{ textAlign: 'right' }}>
//             <Typography variant="h6">SGD {grandTotal.toFixed(2)}</Typography>
//           </Grid>
//         </Grid>
//       </Paper>

//       {/* Action Buttons */}
//       <Stack direction="row" spacing={2} justifyContent="flex-end">
//         <Button
//           type="button"
//           variant="outlined"
//           color="error"
//           onClick={onClose}
//           disabled={submitting}
//         >
//           Cancel
//         </Button>
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           disabled={submitting || !signatures.customer.agreed}
//           startIcon={submitting ? <CircularProgress size={20} /> : null}
//         >
//           {submitting ? "Creating..." : "Create Invoice"}
//         </Button>
//       </Stack>

//       {/* Error/Success Feedback */}
//       <Snackbar
//         open={!!error || success}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={success ? 'success' : 'error'}
//           sx={{ width: '100%' }}
//         >
//           {success ? 'Invoice created successfully!' : error}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }

// export default CreateInvoice;



function CreateInvoice({ onClose, customerInfo }) {
  // State for form data
  const [invoiceData, setInvoiceData] = useState({
    selectedCategory: "",
    services: {},
    paymentMethods: {
      paynowKey: "",
      internetTransfer: "",
      cheque: ""
    },
    terms: {
      prices: "",
      downpayments: "",
      quality: "",
      paymentTerms: "",
      warranty: "",
      confidentiality: "",
      mediation: ""
    },
    signatures: {
      contractor: {
        name: "",
        signatureUrl: ""
      },
      customer: {
        name: customerInfo.customer.name || "",
        agreed: false,
        signatureUrl: ""
      }
    },
    notes: "",
    status: "draft"
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/api/categories");
        setCategories(response.data);
        
        // Initialize services structure with all categories
        const initialServices = {};
        Object.keys(servicesData).forEach(category => {
          initialServices[category] = servicesData[category].map(section => ({
            heading: section.heading || "",
            items: section.items.map(item => ({
              description: item,
              quantity: 1,
              price: 0,
              selected: false
            }))
          }));
        });
        
        setInvoiceData(prev => ({
          ...prev,
          services: initialServices
        }));
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories. Please try again.");
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Handle category selection
  const handleCategoryChange = (categoryId) => {
    const selectedCategory = categories.find(cat => cat._id === categoryId);
    setInvoiceData(prev => ({
      ...prev,
      selectedCategory: categoryId,
      selectedCategoryName: selectedCategory?.name || ""
    }));
  };

  // Handle changes for service items
  const handleServiceChange = (category, sectionIndex, itemIndex, field, value) => {
    setInvoiceData(prev => {
      const updated = {...prev};
      if (field === 'selected') {
        updated.services[category][sectionIndex].items[itemIndex].selected = value;
      } else {
        updated.services[category][sectionIndex].items[itemIndex][field] = 
          field === 'quantity' || field === 'price' ? Number(value) : value;
      }
      return updated;
    });
  };

  // Calculate totals
  const calculateTotals = () => {
    let subTotal = 0;
    
    Object.values(invoiceData.services).forEach(category => {
      category.forEach(section => {
        section.items.forEach(item => {
          if (item.selected) {
            subTotal += item.quantity * item.price;
          }
        });
      });
    });
    
    const gst = subTotal * 0.09; // 9% GST
    const grandTotal = subTotal + gst;
    
    return { subTotal, gst, grandTotal };
  };

  const { subTotal, gst, grandTotal } = calculateTotals();

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  setError(null);

  try {
    // Prepare the items for submission
    const items = [];
    
    Object.entries(invoiceData.services).forEach(([categoryName, sections]) => {
      // Find the category ID from the categories list
      const category = categories.find(cat => cat.name === categoryName);
      const categoryId = category ? category._id : null;
      
      sections.forEach(section => {
        section.items.forEach(item => {
          if (item.selected) {
            items.push({
              category: categoryId, // Send the ID instead of name
              title: section.heading || categoryName,
              workDescription: item.description,
              quantity: item.quantity,
              amount: item.price
            });
          }
        });
      });
    });

    const invoicePayload = {
      referenceNo: customerInfo.referenceNo || `INV-${new Date().getFullYear()}-${Math.floor(Math.random() * 900) + 100}`,
      company: customerInfo.company,
      customer: customerInfo.customer,
      date: new Date().toISOString(),
      hdbLicense: customerInfo.hdbLicense,
      items,
      subTotal,
      gst,
      grandTotal,
      paymentMethods: invoiceData.paymentMethods,
      terms: invoiceData.terms,
      signatures: invoiceData.signatures,
      notes: invoiceData.notes,
      status: invoiceData.status
    };

    const response = await fetch('https://cms-sg.onrender.com/api/invoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoicePayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
    setSuccess(true);
    setTimeout(onClose, 2000);

  } catch (error) {
    console.error('Submission failed:', error);
    setError(error.message || 'Failed to create invoice');
  } finally {
    setSubmitting(false);
  }
};

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSubmitting(true);
  //   setError(null);

  //   try {
      
  //     const items = [];
      
  //     Object.entries(invoiceData.services).forEach(([category, sections]) => {
  //       sections.forEach(section => {
  //         section.items.forEach(item => {
  //           if (item.selected) {
  //             items.push({
  //               category,
  //               title: section.heading || category,
  //               workDescription: item.description,
  //               quantity: item.quantity,
  //               amount: item.price
  //             });
  //           }
  //         });
  //       });
  //     });

  //     const invoicePayload = {
  //       referenceNo: customerInfo.referenceNo || `INV-${new Date().getFullYear()}-${Math.floor(Math.random() * 900) + 100}`,
  //       company: customerInfo.company,
  //       customer: customerInfo.customer,
  //       date: new Date().toISOString(),
  //       hdbLicense: customerInfo.hdbLicense,
  //       items,
  //       subTotal,
  //       gst,
  //       grandTotal,
  //       paymentMethods: invoiceData.paymentMethods,
  //       terms: invoiceData.terms,
  //       signatures: invoiceData.signatures,
  //       notes: invoiceData.notes,
  //       status: invoiceData.status
  //     };

  //     const response = await fetch('https://cms-sg.onrender.com/api/invoice', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(invoicePayload),
  //     });

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       throw new Error(errorText || `HTTP error! Status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     console.log('Success:', result);
  //     setSuccess(true);
  //     setTimeout(onClose, 2000);

  //   } catch (error) {
  //     console.error('Submission failed:', error);
  //     setError(error.message || 'Failed to create invoice');
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  // Close snackbar
  const handleCloseSnackbar = () => {
    setError(null);
    setSuccess(false);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  const selectedCategoryName = categories.find(cat => cat._id === invoiceData.selectedCategory)?.name || "";

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
      {/* Category Selection Dropdown */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Select Service Category
        </Typography>
        <Select
          fullWidth
          value={invoiceData.selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          displayEmpty
          required
        >
          <MenuItem value="">
            <em>-- Select a Category --</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category._id} value={category._id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Services Section (only shown when category is selected) */}
      {invoiceData.selectedCategory && (
        <>
          <Typography variant="h5" gutterBottom>
            {selectedCategoryName}
          </Typography>
          
          {servicesData[selectedCategoryName]?.map((section, sectionIndex) => (
            <Paper key={sectionIndex} sx={{ p: 2, mb: 3 }}>
              {section.heading && (
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {section.heading}
                </Typography>
              )}
              
              <List dense>
                {section.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex} sx={{ pl: 0 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} sm={6}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={invoiceData.services[selectedCategoryName]?.[sectionIndex]?.items[itemIndex]?.selected || false}
                              onChange={(e) => handleServiceChange(
                                selectedCategoryName, 
                                sectionIndex, 
                                itemIndex, 
                                'selected', 
                                e.target.checked
                              )}
                            />
                          }
                          label={item}
                        />
                      </Grid>
                      
                      {invoiceData.services[selectedCategoryName]?.[sectionIndex]?.items[itemIndex]?.selected && (
                        <>
                          <Grid item xs={6} sm={3}>
                            <TextField
                              fullWidth
                              label="Quantity"
                              type="number"
                              value={invoiceData.services[selectedCategoryName][sectionIndex].items[itemIndex].quantity}
                              onChange={(e) => handleServiceChange(
                                selectedCategoryName, 
                                sectionIndex, 
                                itemIndex, 
                                'quantity', 
                                e.target.value
                              )}
                              inputProps={{ min: 1 }}
                            />
                          </Grid>
                          <Grid item xs={6} sm={3}>
                            <TextField
                              fullWidth
                              label="Price (SGD)"
                              type="number"
                              value={invoiceData.services[selectedCategoryName][sectionIndex].items[itemIndex].price}
                              onChange={(e) => handleServiceChange(
                                selectedCategoryName, 
                                sectionIndex, 
                                itemIndex, 
                                'price', 
                                e.target.value
                              )}
                              inputProps={{ min: 0, step: 0.01 }}
                            />
                          </Grid>
                        </>
                      )}
                    </Grid>
                  </ListItem>
                ))}
              </List>
            </Paper>
          ))}
        </>
      )}

      {/* Payment Methods Section */}
      <Typography variant="h6" gutterBottom>
        Payment Methods
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="PayNow Key"
            value={invoiceData.paymentMethods.paynowKey}
            onChange={(e) => setInvoiceData({
              ...invoiceData,
              paymentMethods: {
                ...invoiceData.paymentMethods,
                paynowKey: e.target.value
              }
            })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Internet Transfer"
            value={invoiceData.paymentMethods.internetTransfer}
            onChange={(e) => setInvoiceData({
              ...invoiceData,
              paymentMethods: {
                ...invoiceData.paymentMethods,
                internetTransfer: e.target.value
              }
            })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Cheque Payment"
            value={invoiceData.paymentMethods.cheque}
            onChange={(e) => setInvoiceData({
              ...invoiceData,
              paymentMethods: {
                ...invoiceData.paymentMethods,
                cheque: e.target.value
              }
            })}
          />
        </Grid>
      </Grid>

      {/* Terms & Conditions Section */}
      <Typography variant="h6" gutterBottom>
        Terms & Conditions
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {Object.keys(invoiceData.terms).map((termKey) => (
          <Grid item xs={12} key={termKey}>
            <TextField
              fullWidth
              label={termKey.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              value={invoiceData.terms[termKey]}
              onChange={(e) => setInvoiceData({
                ...invoiceData,
                terms: {
                  ...invoiceData.terms,
                  [termKey]: e.target.value
                }
              })}
              multiline
              rows={2}
              placeholder={`Enter ${termKey} terms`}
            />
          </Grid>
        ))}
      </Grid>

      {/* Signatures Section */}
      <Typography variant="h6" gutterBottom>
        Signatures
      </Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Contractor Name"
              value={invoiceData.signatures.contractor.name}
              onChange={(e) => setInvoiceData({
                ...invoiceData,
                signatures: {
                  ...invoiceData.signatures,
                  contractor: {
                    ...invoiceData.signatures.contractor,
                    name: e.target.value
                  }
                }
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Contractor Signature URL"
              value={invoiceData.signatures.contractor.signatureUrl}
              onChange={(e) => setInvoiceData({
                ...invoiceData,
                signatures: {
                  ...invoiceData.signatures,
                  contractor: {
                    ...invoiceData.signatures.contractor,
                    signatureUrl: e.target.value
                  }
                }
              })}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={invoiceData.signatures.customer.agreed}
                  onChange={(e) => setInvoiceData({
                    ...invoiceData,
                    signatures: {
                      ...invoiceData.signatures,
                      customer: {
                        ...invoiceData.signatures.customer,
                        agreed: e.target.checked
                      }
                    }
                  })}
                  required
                />
              }
              label="I agree to the terms and conditions"
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Notes Section */}
      <TextField
        fullWidth
        label="Additional Notes"
        value={invoiceData.notes}
        onChange={(e) => setInvoiceData({
          ...invoiceData,
          notes: e.target.value
        })}
        multiline
        rows={3}
        sx={{ mb: 3 }}
      />

      {/* Status Selection */}
      <Select
        fullWidth
        value={invoiceData.status}
        onChange={(e) => setInvoiceData({
          ...invoiceData,
          status: e.target.value
        })}
        sx={{ mb: 3 }}
      >
        <MenuItem value="draft">Draft</MenuItem>
        <MenuItem value="sent">Sent</MenuItem>
        <MenuItem value="confirmed">Confirmed</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="cancelled">Cancelled</MenuItem>
      </Select>

      {/* Totals Section */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>Subtotal:</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Typography>SGD {subTotal.toFixed(2)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>GST (9%):</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Typography>SGD {gst.toFixed(2)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Grand Total:</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Typography variant="h6">SGD {grandTotal.toFixed(2)}</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Action Buttons */}
      <Stack direction="row" spacing={2} justifyContent="flex-end">
        <Button
          type="button"
          variant="outlined"
          color="error"
          onClick={onClose}
          disabled={submitting}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={submitting || !invoiceData.signatures.customer.agreed}
          startIcon={submitting ? <CircularProgress size={20} /> : null}
        >
          {submitting ? "Creating..." : "Create Invoice"}
        </Button>
      </Stack>

      {/* Error/Success Feedback */}
      <Snackbar
        open={!!error || success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={success ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {success ? 'Invoice created successfully!' : error}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default CreateInvoice;