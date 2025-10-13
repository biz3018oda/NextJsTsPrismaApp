"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NewItemsLists from "./NewItemsLists";


/**
 * Section - 新着
 */
const NewItemsSection = () => {
  const title = "新着";

  return (
      <Box
        aria-label="content-new"
        sx={{ backgroundColor:"secondary.main" }}
      >
        <Box
          aria-label="content-new"
          component="section"
          sx={{ padding: "80px 40px" }}
        >
          <Typography variant="h2" sx={{ color:"#ffffff" }} gutterBottom>
            {title}
          </Typography>
          <NewItemsLists />
        </Box>
      </Box>
  );
};

export default NewItemsSection;
