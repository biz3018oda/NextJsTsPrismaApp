"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NewsLists from "./NewsLists";


/**
 * Section - ニュース
 */
const NewsSection = () => {

  return (
    <Box
      aria-label="content-news"
      component="section"
      sx={{ padding: "80px 40px" }}
    >
      <Typography variant="h2" gutterBottom>
        NEWS
      </Typography>
      <NewsLists />
    </Box>
  );
};

export default NewsSection;
