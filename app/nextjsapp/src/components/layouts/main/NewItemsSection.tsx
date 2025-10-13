"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextMobileStepper from "./TextMobileStepper";


/**
 * Section - 新着
 */
const NewItemsSection = () => {

  return (
      <Box
        aria-label="content-new"
        sx={{ backgroundColor:"secondary.main" }}
      >
        <Box component="section" sx={{ padding: "80px 40px" }}>
          <Typography variant="h2" sx={{ color:"#ffffff" }} gutterBottom>
            新着
          </Typography>
          <TextMobileStepper />
        </Box>
      </Box>
  );
};

export default NewItemsSection;
