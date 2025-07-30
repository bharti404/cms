import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Stack
} from "@mui/material";

const servicesData = {
  "Hacking Works": [
    {
      heading: "Supply labour and tool to hack/ dismantle away the following item:",
      items: [
        "Living & Dining Hall: floor tile & skirting",
        "3 Bedrooms: floor tile/parquet/laminate & skirting",
        "Kitchen: floor & wall tile, kitchen cabinet, work top & fitting",
        "Master Bathroom: floor & wall tile, sanitary, vanity, screen & fitting",
        "Common Bathroom: floor & wall tile, sanitary, vanity, screen & fitting",
        "Utility Bathroom: floor & wall tile, sanitary, vanity, screen & fitting",
        "Balcony: floor tile & skirting",
        "Yard: floor tile & skirting Kitchen & Bathrooms false ceiling included (condo / private house)"
      ]
    },
    {
      heading: "Additional hacking work for:",
      items: ["Ceiling", "Cornices work", "Carpentry work", "Wardrobe"]
    }
  ],

  "Electrical Works": [
    {
      heading: "Electrical Fittings:",
      items: ["Lighting points", "Power points", "Switch boards"]
    },
    {
      heading: "Safety Items:",
      items: ["Circuit breakers", "Earthing setup"]
    }
  ]
  // Add other categories...
};

function CreateInvoice({ category, onClose }) {
  const [selectedCategories, setSelectedCategories] = useState([]); // multiple categories
  const [data, setData] = useState({});
  const [newCategory, setNewCategory] = useState("");

  // Add first category from parent (only once)
  useEffect(() => {
    if (category && !selectedCategories.includes(category)) {
      setSelectedCategories([category]);
    }
  }, [category]);

  // Handle input change
  const handleChange = (category, item, field, value) => {
    setData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [item]: { ...prev[category]?.[item], [field]: value }
      }
    }));
  };

  // Add another category (cannot duplicate)
  const handleAddCategory = () => {
    if (newCategory && !selectedCategories.includes(newCategory)) {
      setSelectedCategories([...selectedCategories, newCategory]);
      setNewCategory("");
    }
  };

  return (
    <form>
      {/* Add more category dropdown */}
     

      {/* Render all selected categories */}
      {selectedCategories.map((catName, catIndex) => (
        <Box key={catIndex} mb={4}>
          {/* Category title */}
          <Typography
            variant="h5"
            sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
          >
            {catName}
          </Typography>

          {/* Category Groups */}
          {servicesData[catName]?.map((group, index) => (
            <Box key={index} mb={3}>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                {group.heading}
              </Typography>
              {group.items.map((item, iIndex) => (
                <Box
                  key={iIndex}
                  mb={2}
                  p={2}
                  border="1px solid #ddd"
                  borderRadius="6px"
                >
                  <Typography sx={{ mb: 1 }}>{item}</Typography>
                  <TextField
                    fullWidth
                    label="Description"
                    size="small"
                    sx={{ mb: 1 }}
                    value={data[catName]?.[item]?.description || ""}
                    onChange={(e) =>
                      handleChange(catName, item, "description", e.target.value)
                    }
                  />
                  <TextField
                    fullWidth
                    label="Quantity"
                    type="number"
                    size="small"
                    sx={{ mb: 1 }}
                    value={data[catName]?.[item]?.quantity || ""}
                    onChange={(e) =>
                      handleChange(catName, item, "quantity", e.target.value)
                    }
                  />
                  <TextField
                    fullWidth
                    label="Price"
                    type="number"
                    size="small"
                    value={data[catName]?.[item]?.price || ""}
                    onChange={(e) =>
                      handleChange(catName, item, "price", e.target.value)
                    }
                  />
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      ))}

       <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Select
          fullWidth
          value={newCategory}
        //   onChange={(e) => setNewCategory(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">
            <em>-- Select Category --</em>
          </MenuItem>
          {Object.keys(servicesData)
            .filter((cat) => !selectedCategories.includes(cat))
            .map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
        </Select>

        {/* <Button variant="outlined" type="button" onClick={handleAddCategory}>
          + Add More Service
        </Button> */}
         <Button variant="outlined" type="button" >
          + Add More Service
        </Button>
      </Stack>

      {/* Save & Cancel */}
      {selectedCategories.length > 0 && (
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => console.log("Invoice Data:", data)}
          >
            Save
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="error"
            onClick={onClose}
          >
            Cancel
          </Button>
        </Stack>
      )}
    </form>
  );
}

export default CreateInvoice;
