// EditInvoice.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Stack,
  CircularProgress,
  Snackbar,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions

} from '@mui/material';
import { Delete as DeleteIcon ,Add as AddIcon,  } from '@mui/icons-material';

import axiosInstance from 'api/axiosInstance';


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

// function EditInvoice({ invoiceId, onClose, onUpdate }) {
//   const [invoiceData, setInvoiceData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [step, setStep] = useState(1); // 1: Customer details, 2: Invoice items
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [services, setServices] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [invoiceRes, categoriesRes] = await Promise.all([
//           axiosInstance.get(`/api/invoice/${invoiceId}`),
//           axiosInstance.get('/api/categories')
//         ]);

//         const initialServices = {};
//         Object.keys(servicesData).forEach(category => {
//           initialServices[category] = servicesData[category].map(section => ({
//             heading: section.heading || "",
//             items: section.items.map(item => ({
//               description: item,
//               quantity: 1,
//               price: 0,
//               selected: false
//             }))
//           }));
//         });

        
//         invoiceRes.data.items.forEach(item => {
//           const categoryName = categoriesRes.data.find(cat => cat._id === item.category)?.name;
//           if (categoryName && initialServices[categoryName]) {
//             initialServices[categoryName].forEach(section => {
//               section.items.forEach(serviceItem => {
//                 if (serviceItem.description === item.workDescription) {
//                   serviceItem.selected = true;
//                   serviceItem.quantity = item.quantity;
//                   serviceItem.price = item.amount;
//                 }
//               });
//             });
//           }
//         });

//         setServices(initialServices);
//         setInvoiceData(invoiceRes.data);
//         setCategories(categoriesRes.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Failed to load invoice data');
//         setLoading(false);
//       }
//     };
    
//     fetchData();
//   }, [invoiceId]);

//   const handleCustomerChange = (field, value) => {
//     setInvoiceData(prev => ({
//       ...prev,
//       customer: {
//         ...prev.customer,
//         [field]: value
//       }
//     }));
//   };

//   const handleGeneralChange = (field, value) => {
//     setInvoiceData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleTermsChange = (field, value) => {
//     setInvoiceData(prev => ({
//       ...prev,
//       terms: {
//         ...prev.terms,
//         [field]: value
//       }
//     }));
//   };

//   const handlePaymentMethodChange = (field, value) => {
//     setInvoiceData(prev => ({
//       ...prev,
//       paymentMethods: {
//         ...prev.paymentMethods,
//         [field]: value
//       }
//     }));
//   };

//   const handleSignatureChange = (role, field, value) => {
//     setInvoiceData(prev => ({
//       ...prev,
//       signatures: {
//         ...prev.signatures,
//         [role]: {
//           ...prev.signatures[role],
//           [field]: value
//         }
//       }
//     }));
//   };

//   const handleCategoryChange = (categoryId) => {
//     const selectedCategory = categories.find(cat => cat._id === categoryId);
//     setSelectedCategory(selectedCategory?.name || "");
//   };

  
//   const handleServiceChange = (category, sectionIndex, itemIndex, field, value) => {
//     setServices(prev => {
//       const updated = {...prev};
//       if (field === 'selected') {
//         updated[category][sectionIndex].items[itemIndex].selected = value;
//       } else {
//         updated[category][sectionIndex].items[itemIndex][field] = 
//           field === 'quantity' || field === 'price' ? Number(value) : value;
//       }
//       return updated;
//     });
//   };

//   const calculateTotals = () => {
//     let subTotal = 0;
    
//     Object.values(services).forEach(category => {
//       category.forEach(section => {
//         section.items.forEach(item => {
//           if (item.selected) {
//             subTotal += item.quantity * item.price;
//           }
//         });
//       });
//     });
    
//     const gst = subTotal * 0.09;
//     const grandTotal = subTotal + gst;
    
//     return { subTotal, gst, grandTotal };
//   };

//   const { subTotal, gst, grandTotal } = calculateTotals();

//   const handleSubmit = async () => {
//     setSubmitting(true);
//     setError(null);

//     try {
     
//       const items = [];
      
//       Object.entries(services).forEach(([categoryName, sections]) => {
//         const category = categories.find(cat => cat.name === categoryName);
//         const categoryId = category ? category._id : null;
        
//         sections.forEach(section => {
//           section.items.forEach(item => {
//             if (item.selected) {
//               items.push({
//                 category: categoryId,
//                 title: section.heading || categoryName,
//                 workDescription: item.description,
//                 quantity: item.quantity,
//                 amount: item.price
//               });
//             }
//           });
//         });
//       });

//       const payload = {
//         ...invoiceData,
//         items,
//         subTotal,
//         gst,
//         grandTotal
//       };

//       const response = await axiosInstance.put(`/api/invoice/${invoiceId}`, payload);
      
//       setSuccess(true);
//       onUpdate(response.data);
//       setTimeout(onClose, 2000);
//     } catch (err) {
//       console.error('Error updating invoice:', err);
//       setError(err.response?.data?.message || 'Failed to update invoice');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!invoiceData) {
//     return (
//       <Box p={3}>
//         <Typography color="error">Invoice data not available</Typography>
//       </Box>
//     );
//   }

//   const selectedCategoryName = selectedCategory;

//   return (
//     <Box sx={{ p: 2 }}>
     
//       {step === 1 && (
//         <Box>
//           <Typography variant="h6" gutterBottom>
//             Edit Customer Information
//           </Typography>
          
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Customer Name"
//                 value={invoiceData.customer.name}
//                 onChange={(e) => handleCustomerChange('name', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="NRIC Last 4"
//                 value={invoiceData.customer.nricLast4}
//                 onChange={(e) => handleCustomerChange('nricLast4', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Contact Number"
//                 value={invoiceData.customer.contactNumber}
//                 onChange={(e) => handleCustomerChange('contactNumber', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 value={invoiceData.customer.email}
//                 onChange={(e) => handleCustomerChange('email', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Address"
//                 value={invoiceData.customer.address}
//                 onChange={(e) => handleCustomerChange('address', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Postal Code"
//                 value={invoiceData.customer.postalCode}
//                 onChange={(e) => handleCustomerChange('postalCode', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="HDB License"
//                 value={invoiceData.hdbLicense}
//                 onChange={(e) => handleGeneralChange('hdbLicense', e.target.value)}
//               />
//             </Grid>
//           </Grid>

//           <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
//             <Button variant="outlined" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button 
//               variant="contained" 
//               onClick={() => setStep(2)}
//             >
//               Next
//             </Button>
//           </Stack>
//         </Box>
//       )}

      
//       {step === 2 && (
//         <Box>
//           <Typography variant="h6" gutterBottom>
//             Edit Services
//           </Typography>

         
//           <Box sx={{ mb: 3 }}>
//             <Typography variant="h6" gutterBottom>
//               Select Service Category
//             </Typography>
//             <Select
//               fullWidth
//               value={categories.find(cat => cat.name === selectedCategoryName)?._id || ""}
//               onChange={(e) => handleCategoryChange(e.target.value)}
//               displayEmpty
//             >
//               <MenuItem value="">
//                 <em>-- Select a Category --</em>
//               </MenuItem>
//               {categories.map((category) => (
//                 <MenuItem key={category._id} value={category._id}>
//                   {category.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </Box>

  
//           {selectedCategoryName && (
//             <>
//               <Typography variant="h5" gutterBottom>
//                 {selectedCategoryName}
//               </Typography>
              
//               {servicesData[selectedCategoryName]?.map((section, sectionIndex) => (
//                 <Paper key={sectionIndex} sx={{ p: 2, mb: 3 }}>
//                   {section.heading && (
//                     <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
//                       {section.heading}
//                     </Typography>
//                   )}
                  
//                   <List dense>
//                     {section.items.map((item, itemIndex) => (
//                       <ListItem key={itemIndex} sx={{ pl: 0 }}>
//                         <Grid container spacing={2} alignItems="center">
//                           <Grid item xs={12} sm={6}>
//                             <FormControlLabel
//                               control={
//                                 <Checkbox
//                                   checked={services[selectedCategoryName]?.[sectionIndex]?.items[itemIndex]?.selected || false}
//                                   onChange={(e) => handleServiceChange(
//                                     selectedCategoryName, 
//                                     sectionIndex, 
//                                     itemIndex, 
//                                     'selected', 
//                                     e.target.checked
//                                   )}
//                                 />
//                               }
//                               label={item}
//                             />
//                           </Grid>
                          
//                           {services[selectedCategoryName]?.[sectionIndex]?.items[itemIndex]?.selected && (
//                             <>
//                               <Grid item xs={6} sm={3}>
//                                 <TextField
//                                   fullWidth
//                                   label="Quantity"
//                                   type="number"
//                                   value={services[selectedCategoryName][sectionIndex].items[itemIndex].quantity}
//                                   onChange={(e) => handleServiceChange(
//                                     selectedCategoryName, 
//                                     sectionIndex, 
//                                     itemIndex, 
//                                     'quantity', 
//                                     e.target.value
//                                   )}
//                                   inputProps={{ min: 1 }}
//                                 />
//                               </Grid>
//                               <Grid item xs={6} sm={3}>
//                                 <TextField
//                                   fullWidth
//                                   label="Price (SGD)"
//                                   type="number"
//                                   value={services[selectedCategoryName][sectionIndex].items[itemIndex].price}
//                                   onChange={(e) => handleServiceChange(
//                                     selectedCategoryName, 
//                                     sectionIndex, 
//                                     itemIndex, 
//                                     'price', 
//                                     e.target.value
//                                   )}
//                                   inputProps={{ min: 0, step: 0.01 }}
//                                 />
//                               </Grid>
//                             </>
//                           )}
//                         </Grid>
//                       </ListItem>
//                     ))}
//                   </List>
//                 </Paper>
//               ))}
//             </>
//           )}

       
//           <Typography variant="h6" gutterBottom>
//             Payment Methods
//           </Typography>
//           <Grid container spacing={2} sx={{ mb: 3 }}>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 fullWidth
//                 label="PayNow Key"
//                 value={invoiceData.paymentMethods.paynowKey}
//                 onChange={(e) => handlePaymentMethodChange('paynowKey', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 fullWidth
//                 label="Internet Transfer"
//                 value={invoiceData.paymentMethods.internetTransfer}
//                 onChange={(e) => handlePaymentMethodChange('internetTransfer', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 fullWidth
//                 label="Cheque Payment"
//                 value={invoiceData.paymentMethods.cheque}
//                 onChange={(e) => handlePaymentMethodChange('cheque', e.target.value)}
//               />
//             </Grid>
//           </Grid>

//           {/* Terms & Conditions */}
//           <Typography variant="h6" gutterBottom>
//             Terms & Conditions
//           </Typography>
//           <Grid container spacing={2} sx={{ mb: 3 }}>
//             {Object.keys(invoiceData.terms).map(term => (
//               <Grid item xs={12} key={term}>
//                 <TextField
//                   fullWidth
//                   label={term.charAt(0).toUpperCase() + term.slice(1)}
//                   value={invoiceData.terms[term]}
//                   onChange={(e) => handleTermsChange(term, e.target.value)}
//                   multiline
//                   rows={2}
//                 />
//               </Grid>
//             ))}
//           </Grid>

 
//           <Typography variant="h6" gutterBottom>
//             Signatures
//           </Typography>
//           <Grid container spacing={2} sx={{ mb: 3 }}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Contractor Name"
//                 value={invoiceData.signatures.contractor.name}
//                 onChange={(e) => handleSignatureChange('contractor', 'name', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Contractor Signature URL"
//                 value={invoiceData.signatures.contractor.signatureUrl}
//                 onChange={(e) => handleSignatureChange('contractor', 'signatureUrl', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={invoiceData.signatures.customer.agreed}
//                     onChange={(e) => handleSignatureChange('customer', 'agreed', e.target.checked)}
//                   />
//                 }
//                 label="Customer agrees to terms"
//               />
//             </Grid>
//           </Grid>

      
//           <TextField
//             fullWidth
//             label="Additional Notes"
//             value={invoiceData.notes}
//             onChange={(e) => handleGeneralChange('notes', e.target.value)}
//             multiline
//             rows={3}
//             sx={{ mb: 3 }}
//           />

        
//           <Select
//             fullWidth
//             value={invoiceData.status}
//             onChange={(e) => handleGeneralChange('status', e.target.value)}
//             sx={{ mb: 3 }}
//           >
//             <MenuItem value="draft">Draft</MenuItem>
//             <MenuItem value="sent">Sent</MenuItem>
//             <MenuItem value="confirmed">Confirmed</MenuItem>
//             <MenuItem value="completed">Completed</MenuItem>
//             <MenuItem value="cancelled">Cancelled</MenuItem>
//           </Select>

         
//           <Paper sx={{ p: 2, mb: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <Typography>Subtotal:</Typography>
//               </Grid>
//               <Grid item xs={6} textAlign="right">
//                 <Typography>SGD {subTotal.toFixed(2)}</Typography>
//               </Grid>
//               <Grid item xs={6}>
//                 <Typography>GST (9%):</Typography>
//               </Grid>
//               <Grid item xs={6} textAlign="right">
//                 <Typography>SGD {gst.toFixed(2)}</Typography>
//               </Grid>
//               <Grid item xs={6}>
//                 <Typography variant="h6">Grand Total:</Typography>
//               </Grid>
//               <Grid item xs={6} textAlign="right">
//                 <Typography variant="h6">SGD {grandTotal.toFixed(2)}</Typography>
//               </Grid>
//             </Grid>
//           </Paper>

//           <Stack direction="row" spacing={2} justifyContent="space-between">
//             <Button
//               variant="outlined"
//               onClick={() => setStep(1)}
//             >
//               Back
//             </Button>
//             <Stack direction="row" spacing={2}>
//               <Button
//                 variant="outlined"
//                 color="error"
//                 onClick={onClose}
//                 disabled={submitting}
//               >
//                 Cancel
//               </Button>
//               <Button
//                 variant="contained"
//                 onClick={handleSubmit}
//                 disabled={submitting}
//                 startIcon={submitting ? <CircularProgress size={20} /> : null}
//               >
//                 {submitting ? "Updating..." : "Update Invoice"}
//               </Button>
//             </Stack>
//           </Stack>
//         </Box>
//       )}

      
//       <Snackbar
//         open={!!error || success}
//         autoHideDuration={6000}
//         onClose={() => {
//           setError(null);
//           setSuccess(false);
//         }}
//       >
//         <Alert
//           severity={success ? 'success' : 'error'}
//           sx={{ width: '100%' }}
//         >
//           {success ? 'Invoice updated successfully!' : error}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }

// EditInvoice.js
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Paper,
//   Grid,
//   Select,
//   MenuItem,
//   FormControlLabel,
//   Checkbox,
//   Stack,
//   CircularProgress,
//   Snackbar,
//   Alert,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   List,
//   ListItem,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions
// } from '@mui/material';
// import { Delete as DeleteIcon, Add as AddIcon } from '@mui/icons-material';
// import axiosInstance from 'api/axiosInstance';

// ... (keep your existing servicesData import)

// function EditInvoice({ invoiceId, onClose, onUpdate }) {
//   const [invoiceData, setInvoiceData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [step, setStep] = useState(1);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [services, setServices] = useState({});
//   const [customItems, setCustomItems] = useState([]);
//   const [openAddItemDialog, setOpenAddItemDialog] = useState(false);
//   const [newItem, setNewItem] = useState({
//     description: "",
//     quantity: 1,
//     price: 0,
//     category: ""
//   });

//   // Fetch invoice data and categories
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [invoiceRes, categoriesRes] = await Promise.all([
//           axiosInstance.get(`/api/invoice/${invoiceId}`),
//           axiosInstance.get('/api/categories')
//         ]);
        
//         // Initialize services structure with all categories
//         const initialServices = {};
//         Object.keys(servicesData).forEach(category => {
//           initialServices[category] = servicesData[category].map(section => ({
//             heading: section.heading || "",
//             items: section.items.map(item => ({
//               description: item,
//               quantity: 1,
//               price: 0,
//               selected: false,
//               isCustom: false
//             }))
//           }));
//         });

//         // Initialize custom items array
//         const initialCustomItems = [];

//         // Mark items from the invoice as selected
//         invoiceRes.data.items.forEach(item => {
//           const categoryName = categoriesRes.data.find(cat => cat._id === item.category)?.name;
          
//           // Check if item exists in predefined services
//           let foundInServices = false;
//           if (categoryName && initialServices[categoryName]) {
//             initialServices[categoryName].forEach(section => {
//               section.items.forEach(serviceItem => {
//                 if (serviceItem.description === item.workDescription) {
//                   serviceItem.selected = true;
//                   serviceItem.quantity = item.quantity;
//                   serviceItem.price = item.amount;
//                   foundInServices = true;
//                 }
//               });
//             });
//           }
          
//           // If not found in predefined services, add to custom items
//           if (!foundInServices && categoryName) {
//             initialCustomItems.push({
//               description: item.workDescription,
//               quantity: item.quantity,
//               price: item.amount,
//               category: categoryName,
//               selected: true,
//               isCustom: true
//             });
//           }
//         });

//         setServices(initialServices);
//         setCustomItems(initialCustomItems);
//         setInvoiceData(invoiceRes.data);
//         setCategories(categoriesRes.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching data:', err);
//         setError('Failed to load invoice data');
//         setLoading(false);
//       }
//     };
    
//     fetchData();
//   }, [invoiceId]);

//   const handleCustomerChange = (field, value) => {
//     setInvoiceData(prev => ({
//       ...prev,
//       customer: {
//         ...prev.customer,
//         [field]: value
//       }
//     }));
//   };

//    const handleGeneralChange = (field, value) => {
//     setInvoiceData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Handle adding new custom item
//   const handleAddCustomItem = () => {
//     if (!newItem.category || !newItem.description) {
//       setError('Category and description are required');
//       return;
//     }

//     setCustomItems(prev => [...prev, {
//       ...newItem,
//       selected: true,
//       isCustom: true
//     }]);

//     setNewItem({
//       description: "",
//       quantity: 1,
//       price: 0,
//       category: ""
//     });
//     setOpenAddItemDialog(false);
//   };

//   // Handle removing custom item
//   const handleRemoveCustomItem = (index) => {
//     setCustomItems(prev => prev.filter((_, i) => i !== index));
//   };

//   // Handle changes for custom items
//   const handleCustomItemChange = (index, field, value) => {
//     setCustomItems(prev => {
//       const updated = [...prev];
//       updated[index][field] = field === 'quantity' || field === 'price' ? Number(value) : value;
//       return updated;
//     });
//   };

//   // ... (keep your existing handlers for customer, general, terms changes)

//   // Calculate totals including custom items
//   const calculateTotals = () => {
//     let subTotal = 0;
    
//     // Calculate from services
//     Object.values(services).forEach(category => {
//       category.forEach(section => {
//         section.items.forEach(item => {
//           if (item.selected) {
//             subTotal += item.quantity * item.price;
//           }
//         });
//       });
//     });
    
//     // Calculate from custom items
//     customItems.forEach(item => {
//       if (item.selected) {
//         subTotal += item.quantity * item.price;
//       }
//     });
    
//     const gst = subTotal * 0.09;
//     const grandTotal = subTotal + gst;
    
//     return { subTotal, gst, grandTotal };
//   };

//   const { subTotal, gst, grandTotal } = calculateTotals();

//   const handleSubmit = async () => {
//     setSubmitting(true);
//     setError(null);

//     try {
//       // Prepare the items for submission
//       const items = [];
      
//       // Add items from services
//       Object.entries(services).forEach(([categoryName, sections]) => {
//         const category = categories.find(cat => cat.name === categoryName);
//         const categoryId = category ? category._id : null;
        
//         sections.forEach(section => {
//           section.items.forEach(item => {
//             if (item.selected) {
//               items.push({
//                 category: categoryId,
//                 title: section.heading || categoryName,
//                 workDescription: item.description,
//                 quantity: item.quantity,
//                 amount: item.price,
//                 isCustom: false
//               });
//             }
//           });
//         });
//       });

//       // Add custom items
//       customItems.forEach(item => {
//         if (item.selected) {
//           const category = categories.find(cat => cat.name === item.category);
//           const categoryId = category ? category._id : null;
          
//           items.push({
//             category: categoryId,
//             title: "Custom Item",
//             workDescription: item.description,
//             quantity: item.quantity,
//             amount: item.price,
//             isCustom: true
//           });
//         }
//       });

//       const payload = {
//         ...invoiceData,
//         items,
//         subTotal,
//         gst,
//         grandTotal
//       };

//       const response = await axiosInstance.put(`/api/invoice/${invoiceId}`, payload);
      
//       setSuccess(true);
//       onUpdate(response.data);
//       setTimeout(onClose, 2000);
//     } catch (err) {
//       console.error('Error updating invoice:', err);
//       setError(err.response?.data?.message || 'Failed to update invoice');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // ... (keep your existing loading and error handling)

//   const selectedCategoryName = selectedCategory;

//   return (
//     <Box sx={{ p: 2 }}>
//       {/* Step 1: Customer Details (keep existing) */}
//       {step === 1 && (
//         <Box>
//           <Typography variant="h6" gutterBottom>
//             Edit Customer Information
//           </Typography>
          
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Customer Name"
//                 value={invoiceData.customer.name}
//                 onChange={(e) => handleCustomerChange('name', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="NRIC Last 4"
//                 value={invoiceData.customer.nricLast4}
//                 onChange={(e) => handleCustomerChange('nricLast4', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Contact Number"
//                 value={invoiceData.customer.contactNumber}
//                 onChange={(e) => handleCustomerChange('contactNumber', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 value={invoiceData.customer.email}
//                 onChange={(e) => handleCustomerChange('email', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Address"
//                 value={invoiceData.customer.address}
//                 onChange={(e) => handleCustomerChange('address', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Postal Code"
//                 value={invoiceData.customer.postalCode}
//                 onChange={(e) => handleCustomerChange('postalCode', e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="HDB License"
//                 value={invoiceData.hdbLicense}
//                 onChange={(e) => handleGeneralChange('hdbLicense', e.target.value)}
//               />
//             </Grid>
//           </Grid>

//           <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
//             <Button variant="outlined" onClick={onClose}>
//               Cancel
//             </Button>
//             <Button 
//               variant="contained" 
//               onClick={() => setStep(2)}
//             >
//               Next
//             </Button>
//           </Stack>
//         </Box>
//       )}

//       {/* Step 2: Invoice Items and Terms */}
//       {step === 2 && (
//         <Box>
//           <Typography variant="h6" gutterBottom>
//             Edit Services
//           </Typography>

//           {/* Add Custom Item Button */}
//           <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-end' }}>
//             <Button
//               variant="contained"
//               startIcon={<AddIcon />}
//               onClick={() => setOpenAddItemDialog(true)}
//             >
//               Add Custom Item
//             </Button>
//           </Box>

//           {/* Custom Items Table */}
//           {customItems.length > 0 && (
//             <Paper sx={{ p: 2, mb: 3 }}>
//               <Typography variant="h6" gutterBottom>
//                 Custom Items
//               </Typography>
//               <TableContainer>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Category</TableCell>
//                       <TableCell>Description</TableCell>
//                       <TableCell>Quantity</TableCell>
//                       <TableCell>Price</TableCell>
//                       <TableCell>Actions</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {customItems.map((item, index) => (
//                       <TableRow key={index}>
//                         <TableCell>
//                           <Select
//                             fullWidth
//                             value={item.category}
//                             onChange={(e) => handleCustomItemChange(index, 'category', e.target.value)}
//                           >
//                             {categories.map((category) => (
//                               <MenuItem key={category._id} value={category.name}>
//                                 {category.name}
//                               </MenuItem>
//                             ))}
//                           </Select>
//                         </TableCell>
//                         <TableCell>
//                           <TextField
//                             fullWidth
//                             value={item.description}
//                             onChange={(e) => handleCustomItemChange(index, 'description', e.target.value)}
//                           />
//                         </TableCell>
//                         <TableCell>
//                           <TextField
//                             type="number"
//                             value={item.quantity}
//                             onChange={(e) => handleCustomItemChange(index, 'quantity', e.target.value)}
//                             inputProps={{ min: 1 }}
//                           />
//                         </TableCell>
//                         <TableCell>
//                           <TextField
//                             type="number"
//                             value={item.price}
//                             onChange={(e) => handleCustomItemChange(index, 'price', e.target.value)}
//                             inputProps={{ min: 0, step: 0.01 }}
//                           />
//                         </TableCell>
//                         <TableCell>
//                           <IconButton onClick={() => handleRemoveCustomItem(index)}>
//                             <DeleteIcon color="error" />
//                           </IconButton>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Paper>
//           )}

//           {/* Category Selection Dropdown */}
//           <Box sx={{ mb: 3 }}>
//             <Typography variant="h6" gutterBottom>
//               Select Service Category
//             </Typography>
//             <Select
//               fullWidth
//               value={categories.find(cat => cat.name === selectedCategoryName)?._id || ""}
//               onChange={(e) => handleCategoryChange(e.target.value)}
//               displayEmpty
//             >
//               <MenuItem value="">
//                 <em>-- Select a Category --</em>
//               </MenuItem>
//               {categories.map((category) => (
//                 <MenuItem key={category._id} value={category._id}>
//                   {category.name}
//                 </MenuItem>
//               ))}
//             </Select>
//           </Box>

//           {/* Services Section */}
//           {selectedCategoryName && (
//             <>
//               <Typography variant="h5" gutterBottom>
//                 {selectedCategoryName}
//               </Typography>
              
//               {servicesData[selectedCategoryName]?.map((section, sectionIndex) => (
//                 <Paper key={sectionIndex} sx={{ p: 2, mb: 3 }}>
//                   {section.heading && (
//                     <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
//                       {section.heading}
//                     </Typography>
//                   )}
                  
//                   <List dense>
//                     {section.items.map((item, itemIndex) => (
//                       <ListItem key={itemIndex} sx={{ pl: 0 }}>
//                         <Grid container spacing={2} alignItems="center">
//                           <Grid item xs={12} sm={6}>
//                             <FormControlLabel
//                               control={
//                                 <Checkbox
//                                   checked={services[selectedCategoryName]?.[sectionIndex]?.items[itemIndex]?.selected || false}
//                                   onChange={(e) => handleServiceChange(
//                                     selectedCategoryName, 
//                                     sectionIndex, 
//                                     itemIndex, 
//                                     'selected', 
//                                     e.target.checked
//                                   )}
//                                 />
//                               }
//                               label={item}
//                             />
//                           </Grid>
                          
//                           {services[selectedCategoryName]?.[sectionIndex]?.items[itemIndex]?.selected && (
//                             <>
//                               <Grid item xs={6} sm={3}>
//                                 <TextField
//                                   fullWidth
//                                   label="Quantity"
//                                   type="number"
//                                   value={services[selectedCategoryName][sectionIndex].items[itemIndex].quantity}
//                                   onChange={(e) => handleServiceChange(
//                                     selectedCategoryName, 
//                                     sectionIndex, 
//                                     itemIndex, 
//                                     'quantity', 
//                                     e.target.value
//                                   )}
//                                   inputProps={{ min: 1 }}
//                                 />
//                               </Grid>
//                               <Grid item xs={6} sm={3}>
//                                 <TextField
//                                   fullWidth
//                                   label="Price (SGD)"
//                                   type="number"
//                                   value={services[selectedCategoryName][sectionIndex].items[itemIndex].price}
//                                   onChange={(e) => handleServiceChange(
//                                     selectedCategoryName, 
//                                     sectionIndex, 
//                                     itemIndex, 
//                                     'price', 
//                                     e.target.value
//                                   )}
//                                   inputProps={{ min: 0, step: 0.01 }}
//                                 />
//                               </Grid>
//                             </>
//                           )}
//                         </Grid>
//                       </ListItem>
//                     ))}
//                   </List>
//                 </Paper>
//               ))}
//             </>
//           )}

//           {/* ... (keep the rest of your step 2 UI) */}
//         </Box>
//       )}

//       {/* Add Custom Item Dialog */}
//       <Dialog open={openAddItemDialog} onClose={() => setOpenAddItemDialog(false)}>
//         <DialogTitle>Add Custom Item</DialogTitle>
//         <DialogContent>
//           <Grid container spacing={2} sx={{ mt: 1 }}>
//             <Grid item xs={12}>
//               <Select
//                 fullWidth
//                 value={newItem.category}
//                 onChange={(e) => setNewItem({...newItem, category: e.target.value})}
//                 displayEmpty
//                 required
//               >
//                 <MenuItem value="">
//                   <em>-- Select Category --</em>
//                 </MenuItem>
//                 {categories.map((category) => (
//                   <MenuItem key={category._id} value={category.name}>
//                     {category.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Description"
//                 value={newItem.description}
//                 onChange={(e) => setNewItem({...newItem, description: e.target.value})}
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="Quantity"
//                 type="number"
//                 value={newItem.quantity}
//                 onChange={(e) => setNewItem({...newItem, quantity: Number(e.target.value)})}
//                 inputProps={{ min: 1 }}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="Price (SGD)"
//                 type="number"
//                 value={newItem.price}
//                 onChange={(e) => setNewItem({...newItem, price: Number(e.target.value)})}
//                 inputProps={{ min: 0, step: 0.01 }}
//               />
//             </Grid>
//           </Grid>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenAddItemDialog(false)}>Cancel</Button>
//           <Button onClick={handleAddCustomItem} variant="contained">Add Item</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Success/Error Feedback */}
//       <Snackbar
//         open={!!error || success}
//         autoHideDuration={6000}
//         onClose={() => {
//           setError(null);
//           setSuccess(false);
//         }}
//       >
//         <Alert
//           severity={success ? 'success' : 'error'}
//           sx={{ width: '100%' }}
//         >
//           {success ? 'Invoice updated successfully!' : error}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }




function EditInvoice({ invoiceId, onClose, onUpdate }) {
  const [invoiceData, setInvoiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState([]);
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [services, setServices] = useState({});
  const [customItems, setCustomItems] = useState([]);
  const [openAddItemDialog, setOpenAddItemDialog] = useState(false);
  const [newItem, setNewItem] = useState({
    description: "",
    quantity: 1,
    price: 0,
    category: ""
  });

  const [newCategoryDialogOpen, setNewCategoryDialogOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
 const [subTotal, setSubTotal] = useState(invoiceData?.subTotal || 0);
const [gst, setGst] = useState(invoiceData?.gst || 0);
const [grandTotal, setGrandTotal] = useState(invoiceData?.grandTotal || 0);

useEffect(() => {
  if (invoiceData) {
    calculateTotals();
  }
}, [invoiceData, customItems]); // Recalculate when invoiceData or customItems change


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [invoiceRes, categoriesRes] = await Promise.all([
          axiosInstance.get(`/api/invoice/${invoiceId}`),
          axiosInstance.get('/api/categories')
        ]);
        
        // Initialize services structure with all categories
        const initialServices = {};
        Object.keys(servicesData).forEach(category => {
          initialServices[category] = servicesData[category].map(section => ({
            heading: section.heading || "",
            items: section.items.map(item => ({
              description: item,
              quantity: 1,
              price: 0,
              selected: false,
              isCustom: false
            }))
          }));
        });

        // Initialize custom items array
        const initialCustomItems = [];

        // Mark items from the invoice as selected
        invoiceRes.data.items.forEach(item => {
          const category = categoriesRes.data.find(cat => cat._id === item.category);
          const categoryName = category?.name;
          
          if (categoryName) {
            // Check if item exists in predefined services
            let foundInServices = false;
            if (initialServices[categoryName]) {
              initialServices[categoryName].forEach(section => {
                section.items.forEach(serviceItem => {
                  if (serviceItem.description === item.workDescription) {
                    serviceItem.selected = true;
                    serviceItem.quantity = item.quantity;
                    serviceItem.price = item.amount;
                    foundInServices = true;
                  }
                });
              });
            }
            
            // If not found in predefined services, add to custom items
            if (!foundInServices) {
              initialCustomItems.push({
                description: item.workDescription,
                quantity: item.quantity,
                price: item.amount,
                category: categoryName,
                selected: true,
                isCustom: true
              });
            }
          }
        });

        setServices(initialServices);
        setCustomItems(initialCustomItems);
        setInvoiceData(invoiceRes.data);
        setCategories(categoriesRes.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load invoice data');
        setLoading(false);
      }
    };
    
    fetchData();
  }, [invoiceId]);


  const calculateTotals = () => {
  if (!invoiceData) return;

  // Calculate from existing invoice items
  const existingItemsTotal = invoiceData.items.reduce(
    (sum, item) => sum + (item.amount * (item.quantity || 1)),
    0
  );
  
  // Calculate from custom items
  const customItemsTotal = customItems.reduce(
    (sum, item) => sum + (item.price * (item.quantity || 1)),
    0
  );
  
  // Calculate from selected services
  const servicesTotal = Object.values(services).reduce((sum, sections) => {
    return sum + sections.reduce((sectionSum, section) => {
      return sectionSum + section.items.reduce((itemSum, item) => {
        return item.selected ? itemSum + (item.price * (item.quantity || 1)) : itemSum;
      }, 0);
    }, 0);
  }, 0);

  const newSubTotal = existingItemsTotal + customItemsTotal + servicesTotal;
  const newGst = newSubTotal * 0.09; // Assuming 9% GST
  const newGrandTotal = newSubTotal + newGst;
  
  setSubTotal(newSubTotal);
  setGst(newGst);
  setGrandTotal(newGrandTotal);
  
  // Update the invoice data with calculated totals
  setInvoiceData(prev => ({
    ...prev,
    subTotal: newSubTotal,
    gst: newGst,
    grandTotal: newGrandTotal
  }));
};


    const handleAddNewCategory = async () => {
    if (!newCategoryName.trim()) {
      setError('Category name is required');
      return;
    }

    try {
      const response = await axiosInstance.post('/api/categories', {
        name: newCategoryName.trim()
      });

      setCategories(prev => [...prev, response.data]);
      setNewCategoryName('');
      setNewCategoryDialogOpen(false);
    } catch (err) {
      console.error('Error adding category:', err);
      setError(err.response?.data?.message || 'Failed to add category');
    }
  };

  // Handler for customer information changes
  const handleCustomerChange = (field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      customer: {
        ...prev.customer,
        [field]: value
      }
    }));
  };

  // Handler for general invoice changes
  const handleGeneralChange = (field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handler for terms changes
  const handleTermsChange = (field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      terms: {
        ...prev.terms,
        [field]: value
      }
    }));
  };

  // Handler for payment method changes
  const handlePaymentMethodChange = (field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      paymentMethods: {
        ...prev.paymentMethods,
        [field]: value
      }
    }));
  };

  // Handler for signature changes
  const handleSignatureChange = (role, field, value) => {
    setInvoiceData(prev => ({
      ...prev,
      signatures: {
        ...prev.signatures,
        [role]: {
          ...prev.signatures[role],
          [field]: value
        }
      }
    }));
  };

  // Handler for category selection
  const handleCategoryChange = (categoryId) => {
    const selectedCategory = categories.find(cat => cat._id === categoryId);
    setSelectedCategory(selectedCategory?.name || "");
  };

  // Handler for service item changes
  const handleServiceChange = (category, sectionIndex, itemIndex, field, value) => {
    setServices(prev => {
      const updated = {...prev};
      if (field === 'selected') {
        updated[category][sectionIndex].items[itemIndex].selected = value;
      } else {
        updated[category][sectionIndex].items[itemIndex][field] = 
          field === 'quantity' || field === 'price' ? Number(value) : value;
      }
      return updated;
    });
  };

  // Handler for adding custom item
  const handleAddCustomItem = () => {
    if (!newItem.category || !newItem.description) {
      setError('Category and description are required');
      return;
    }

    setCustomItems(prev => [...prev, {
      ...newItem,
      selected: true,
      isCustom: true
    }]);

    setNewItem({
      description: "",
      quantity: 1,
      price: 0,
      category: ""
    });
    setOpenAddItemDialog(false);
  };

  // Handler for removing custom item
  const handleRemoveCustomItem = (index) => {
    setCustomItems(prev => prev.filter((_, i) => i !== index));
  };

  // Handler for custom item changes
  const handleCustomItemChange = (index, field, value) => {
    setCustomItems(prev => {
      const updated = [...prev];
      updated[index][field] = field === 'quantity' || field === 'price' ? Number(value) : value;
      return updated;
    });
  };

  // Fetch invoice data and categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [invoiceRes, categoriesRes] = await Promise.all([
          axiosInstance.get(`/api/invoice/${invoiceId}`),
          axiosInstance.get('/api/categories')
        ]);
        
        // Initialize services structure with all categories
        const initialServices = {};
        Object.keys(servicesData).forEach(category => {
          initialServices[category] = servicesData[category].map(section => ({
            heading: section.heading || "",
            items: section.items.map(item => ({
              description: item,
              quantity: 1,
              price: 0,
              selected: false,
              isCustom: false
            }))
          }));
        });

        // Initialize custom items array
        const initialCustomItems = [];

        // Mark items from the invoice as selected
        invoiceRes.data.items.forEach(item => {
          const categoryName = categoriesRes.data.find(cat => cat._id === item.category)?.name;
          
          // Check if item exists in predefined services
          let foundInServices = false;
          if (categoryName && initialServices[categoryName]) {
            initialServices[categoryName].forEach(section => {
              section.items.forEach(serviceItem => {
                if (serviceItem.description === item.workDescription) {
                  serviceItem.selected = true;
                  serviceItem.quantity = item.quantity;
                  serviceItem.price = item.amount;
                  foundInServices = true;
                }
              });
            });
          }
          
          // If not found in predefined services, add to custom items
          if (!foundInServices && categoryName) {
            initialCustomItems.push({
              description: item.workDescription,
              quantity: item.quantity,
              price: item.amount,
              category: categoryName,
              selected: true,
              isCustom: true
            });
          }
        });

        setServices(initialServices);
        setCustomItems(initialCustomItems);
        setInvoiceData(invoiceRes.data);
        setCategories(categoriesRes.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load invoice data');
        setLoading(false);
      }
    };
    
    fetchData();
  }, [invoiceId]);

  const handleExistingItemChange = (index, field, value) => {
  const updatedItems = [...invoiceData.items];
  if (field === 'category') {
    const selectedCategory = categories.find(cat => cat._id === value);
    updatedItems[index].category = selectedCategory;
  } else {
    updatedItems[index][field] = field === 'quantity' || field === 'amount' 
      ? Number(value) 
      : value;
  }
  
  setInvoiceData(prev => ({
    ...prev,
    items: updatedItems
  }));
  calculateTotals();
};
//   const handleExistingItemChange = (index, field, value) => {
//   const updatedItems = [...invoiceData.items];
//   if (field === 'category') {
//     // Find the category object by ID
//     const selectedCategory = categories.find(cat => cat._id === value);
//     updatedItems[index].category = selectedCategory;
//   } else {
//     updatedItems[index][field] = value;
//   }
  
//   // Update the invoice data state
//   setInvoiceData(prev => ({
//     ...prev,
//     items: updatedItems
//   }));

//   // Recalculate totals if amount or quantity changed
//   if (field === 'amount' || field === 'quantity') {
//     calculateTotals();
//   }
// };

const handleRemoveExistingItem = (index) => {
  const updatedItems = [...invoiceData.items];
  updatedItems.splice(index, 1);
  setInvoiceData(prev => ({
    ...prev,
    items: updatedItems
  }));
  calculateTotals();
};


//   const calculateTotals = () => {
//     // Calculate from existing items
//     const existingItemsTotal = invoiceData.items.reduce(
//       (sum, item) => sum + (item.amount * (item.quantity || 1)),
//       0
//     );
    
//     // Calculate from custom items
//     const customItemsTotal = customItems.reduce(
//       (sum, item) => sum + (item.price * (item.quantity || 1)),
//       0
//     );
    
//     const newSubTotal = existingItemsTotal + customItemsTotal;
//     const newGst = newSubTotal * 0.09; // Assuming 9% GST
//     const newGrandTotal = newSubTotal + newGst;
    
//     setSubTotal(newSubTotal);
//     setGst(newGst);
//     setGrandTotal(newGrandTotal);
    
//     // Update the invoice data with calculated totals
//     setInvoiceData(prev => ({
//       ...prev,
//       subTotal: newSubTotal,
//       gst: newGst,
//       grandTotal: newGrandTotal
//     }));
//   };
  
//   const { subTotal, gst, grandTotal } = calculateTotals();

//   const handleSubmit = async () => {
//     setSubmitting(true);
//     setError(null);

//     try {
//       // Prepare the items for submission
//       const items = [];
      
//       // Add items from services
//       Object.entries(services).forEach(([categoryName, sections]) => {
//         const category = categories.find(cat => cat.name === categoryName);
//         const categoryId = category ? category._id : null;
        
//         sections.forEach(section => {
//           section.items.forEach(item => {
//             if (item.selected) {
//               items.push({
//                 category: categoryId,
//                 title: section.heading || categoryName,
//                 workDescription: item.description,
//                 quantity: item.quantity,
//                 amount: item.price,
//                 isCustom: false
//               });
//             }
//           });
//         });
//       });

//       // Add custom items
//       customItems.forEach(item => {
//         if (item.selected) {
//           const category = categories.find(cat => cat.name === item.category);
//           const categoryId = category ? category._id : null;
          
//           items.push({
//             category: categoryId,
//             title: "Custom Item",
//             workDescription: item.description,
//             quantity: item.quantity,
//             amount: item.price,
//             isCustom: true
//           });
//         }
//       });

//       const payload = {
//         ...invoiceData,
//         items,
//         subTotal,
//         gst,
//         grandTotal
//       };

//       const response = await axiosInstance.put(`/api/invoice/${invoiceId}`, payload);
      
//       setSuccess(true);
//       onUpdate(response.data);
//       setTimeout(onClose, 2000);
//     } catch (err) {
//       console.error('Error updating invoice:', err);
//       setError(err.response?.data?.message || 'Failed to update invoice');
//     } finally {
//       setSubmitting(false);
//     }
//   };



const handleSubmit = async () => {
  setSubmitting(true);
  setError(null);

  try {
    // Prepare the items for submission - start with existing items
    const items = [...invoiceData.items]; // Keep all existing items
    
    // Add items from services
    Object.entries(services).forEach(([categoryName, sections]) => {
      const category = categories.find(cat => cat.name === categoryName);
      const categoryId = category ? category._id : null;
      
      sections.forEach(section => {
        section.items.forEach(item => {
          if (item.selected) {
            // Check if this service item already exists in the original items
            const exists = items.some(existingItem => 
              existingItem.workDescription === item.description &&
              existingItem.category?._id === categoryId
            );
            
            if (!exists) {
              items.push({
                category: categoryId,
                title: section.heading || categoryName,
                workDescription: item.description,
                quantity: item.quantity,
                amount: item.price,
                isCustom: false
              });
            }
          }
        });
      });
    });

    // Add custom items
    customItems.forEach(item => {
      if (item.selected) {
        const category = categories.find(cat => cat.name === item.category);
        const categoryId = category ? category._id : null;
        
        // Check if this custom item already exists
        const exists = items.some(existingItem => 
          existingItem.workDescription === item.description &&
          existingItem.category?._id === categoryId
        );
        
        if (!exists) {
          items.push({
            category: categoryId,
            title: "Custom Item",
            workDescription: item.description,
            quantity: item.quantity,
            amount: item.price,
            isCustom: true
          });
        }
      }
    });

    const payload = {
      ...invoiceData,
      items,
      subTotal,
      gst,
      grandTotal
    };

    const response = await axiosInstance.put(`/api/invoice/${invoiceId}`, payload);
    
    setSuccess(true);
    onUpdate(response.data);
    setTimeout(onClose, 2000);
  } catch (err) {
    console.error('Error updating invoice:', err);
    setError(err.response?.data?.message || 'Failed to update invoice');
  } finally {
    setSubmitting(false);
  }
};

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (!invoiceData) {
    return (
      <Box p={3}>
        <Typography color="error">Invoice data not available</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 2 }}>
      {/* Step 1: Customer Details */}
      {step === 1 && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Edit Customer Information
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Customer Name"
                value={invoiceData.customer.name}
                onChange={(e) => handleCustomerChange('name', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="NRIC Last 4"
                value={invoiceData.customer.nricLast4}
                onChange={(e) => handleCustomerChange('nricLast4', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contact Number"
                value={invoiceData.customer.contactNumber}
                onChange={(e) => handleCustomerChange('contactNumber', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                value={invoiceData.customer.email}
                onChange={(e) => handleCustomerChange('email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                value={invoiceData.customer.address}
                onChange={(e) => handleCustomerChange('address', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Postal Code"
                value={invoiceData.customer.postalCode}
                onChange={(e) => handleCustomerChange('postalCode', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="HDB License"
                value={invoiceData.hdbLicense}
                onChange={(e) => handleGeneralChange('hdbLicense', e.target.value)}
              />
            </Grid>
          </Grid>

          <Stack direction="row" spacing={2} justifyContent="flex-end" mt={3}>
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              variant="contained" 
              onClick={() => setStep(2)}
            >
              Next
            </Button>
          </Stack>
        </Box>
      )}

      {/* Step 2: Invoice Items and Terms */}
      {step === 2 && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Edit Services
          </Typography>

           <Paper sx={{ p: 2, mb: 3 }}>
  <Typography variant="h6" gutterBottom>
    Existing Items
  </Typography>
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Category</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Work Description</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Amount (SGD)</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {invoiceData.items.map((item, index) => (
          <TableRow key={`existing-${index}`}>
            <TableCell>
              <Typography>
                {item.category?.name || "No category"}
              </Typography>
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                value={item.title}
                onChange={(e) => handleExistingItemChange(index, 'title', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                value={item.workDescription}
                onChange={(e) => handleExistingItemChange(index, 'workDescription', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <TextField
                type="number"
                value={item.quantity}
                onChange={(e) => handleExistingItemChange(index, 'quantity', e.target.value)}
                inputProps={{ min: 1 }}
              />
            </TableCell>
            <TableCell>
              <TextField
                type="number"
                value={item.amount}
                onChange={(e) => handleExistingItemChange(index, 'amount', e.target.value)}
                inputProps={{ min: 0, step: 0.01 }}
              />
            </TableCell>
            <TableCell>
              <IconButton onClick={() => handleRemoveExistingItem(index)}>
                <DeleteIcon color="error" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Paper>

          
          {/* Custom Items Table */}
          {customItems.length > 0 && (
            <Paper sx={{ p: 2, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Custom Items
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Category</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customItems.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Select
                            fullWidth
                            value={item.category}
                            onChange={(e) => handleCustomItemChange(index, 'category', e.target.value)}
                          >
                            {categories.map((category) => (
                              <MenuItem key={category._id} value={category.name}>
                                {category.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </TableCell>
                        <TableCell>
                          <TextField
                            fullWidth
                            value={item.description}
                            onChange={(e) => handleCustomItemChange(index, 'description', e.target.value)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleCustomItemChange(index, 'quantity', e.target.value)}
                            inputProps={{ min: 1 }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            type="number"
                            value={item.price}
                            onChange={(e) => handleCustomItemChange(index, 'price', e.target.value)}
                            inputProps={{ min: 0, step: 0.01 }}
                          />
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={() => handleRemoveCustomItem(index)}>
                            <DeleteIcon color="error" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          )}

          {/* Category Selection Dropdown */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Select Service Category
            </Typography>
            <Select
              fullWidth
              value={categories.find(cat => cat.name === selectedCategory)?._id || ""}
              onChange={(e) => handleCategoryChange(e.target.value)}
              displayEmpty
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

          {/* Services Section */}
          {selectedCategory && (
            <>
              <Typography variant="h5" gutterBottom>
                {selectedCategory}
              </Typography>
              
              {servicesData[selectedCategory]?.map((section, sectionIndex) => (
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
                                  checked={services[selectedCategory]?.[sectionIndex]?.items[itemIndex]?.selected || false}
                                  onChange={(e) => handleServiceChange(
                                    selectedCategory, 
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
                          
                          {services[selectedCategory]?.[sectionIndex]?.items[itemIndex]?.selected && (
                            <>
                              <Grid item xs={6} sm={3}>
                                <TextField
                                  fullWidth
                                  label="Quantity"
                                  type="number"
                                  value={services[selectedCategory][sectionIndex].items[itemIndex].quantity}
                                  onChange={(e) => handleServiceChange(
                                    selectedCategory, 
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
                                  value={services[selectedCategory][sectionIndex].items[itemIndex].price}
                                  onChange={(e) => handleServiceChange(
                                    selectedCategory, 
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

          {/* Payment Methods */}
          <Typography variant="h6" gutterBottom>
            Payment Methods
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="PayNow Key"
                value={invoiceData.paymentMethods.paynowKey}
                onChange={(e) => handlePaymentMethodChange('paynowKey', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Internet Transfer"
                value={invoiceData.paymentMethods.internetTransfer}
                onChange={(e) => handlePaymentMethodChange('internetTransfer', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Cheque Payment"
                value={invoiceData.paymentMethods.cheque}
                onChange={(e) => handlePaymentMethodChange('cheque', e.target.value)}
              />
            </Grid>
          </Grid>

          {/* Terms & Conditions */}
          <Typography variant="h6" gutterBottom>
            Terms & Conditions
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {Object.keys(invoiceData.terms).map(term => (
              <Grid item xs={12} key={term}>
                <TextField
                  fullWidth
                  label={term.charAt(0).toUpperCase() + term.slice(1)}
                  value={invoiceData.terms[term]}
                  onChange={(e) => handleTermsChange(term, e.target.value)}
                  multiline
                  rows={2}
                />
              </Grid>
            ))}
          </Grid>

          {/* Signatures */}
          <Typography variant="h6" gutterBottom>
            Signatures
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contractor Name"
                value={invoiceData.signatures.contractor.name}
                onChange={(e) => handleSignatureChange('contractor', 'name', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Contractor Signature URL"
                value={invoiceData.signatures.contractor.signatureUrl}
                onChange={(e) => handleSignatureChange('contractor', 'signatureUrl', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={invoiceData.signatures.customer.agreed}
                    onChange={(e) => handleSignatureChange('customer', 'agreed', e.target.checked)}
                  />
                }
                label="Customer agrees to terms"
              />
            </Grid>
          </Grid>

          {/* Notes */}
          <TextField
            fullWidth
            label="Additional Notes"
            value={invoiceData.notes}
            onChange={(e) => handleGeneralChange('notes', e.target.value)}
            multiline
            rows={3}
            sx={{ mb: 3 }}
          />

          {/* Status */}
          <Select
            fullWidth
            value={invoiceData.status}
            onChange={(e) => handleGeneralChange('status', e.target.value)}
            sx={{ mb: 3 }}
          >
            <MenuItem value="draft">Draft</MenuItem>
            <MenuItem value="sent">Sent</MenuItem>
            <MenuItem value="confirmed">Confirmed</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="cancelled">Cancelled</MenuItem>
          </Select>

          {/* Totals */}
          <Paper sx={{ p: 2, mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>Subtotal:</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography>SGD {subTotal.toFixed(2)}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>GST (9%):</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography>SGD {gst.toFixed(2)}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Grand Total:</Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography variant="h6">SGD {grandTotal.toFixed(2)}</Typography>
              </Grid>
            </Grid>
          </Paper>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Button
              variant="outlined"
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="error"
                onClick={onClose}
                disabled={submitting}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={submitting}
                startIcon={submitting ? <CircularProgress size={20} /> : null}
              >
                {submitting ? "Updating..." : "Update Invoice"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}

      {/* Add Custom Item Dialog */}
      <Dialog open={openAddItemDialog} onClose={() => setOpenAddItemDialog(false)}>
        <DialogTitle>Add Custom Item</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Select
                fullWidth
                value={newItem.category}
                onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                displayEmpty
                required
              >
                <MenuItem value="">
                  <em>-- Select Category --</em>
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                value={newItem.description}
                onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Quantity"
                type="number"
                value={newItem.quantity}
                onChange={(e) => setNewItem({...newItem, quantity: Number(e.target.value)})}
                inputProps={{ min: 1 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Price (SGD)"
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({...newItem, price: Number(e.target.value)})}
                inputProps={{ min: 0, step: 0.01 }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddItemDialog(false)}>Cancel</Button>
          <Button onClick={handleAddCustomItem} variant="contained">Add Item</Button>
        </DialogActions>
      </Dialog>

      {/* Success/Error Feedback */}
      <Snackbar
        open={!!error || success}
        autoHideDuration={6000}
        onClose={() => {
          setError(null);
          setSuccess(false);
        }}
      >
        <Alert
          severity={success ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {success ? 'Invoice updated successfully!' : error}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default EditInvoice;


