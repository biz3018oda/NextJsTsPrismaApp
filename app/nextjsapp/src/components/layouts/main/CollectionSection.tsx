"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CollectionLists from "./CollectionLists";


/**
 * Section - コレクション
 */
const CollectionSection = () => {
  const title = "コレクション";

  return (
      <Box
        aria-label="content-collection"
      >
        <Box
          component="section"
          sx={{ padding: "80px 40px" }}
        >
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          <CollectionLists />
        </Box>
      </Box>
  );
};

export default CollectionSection;
