"use client";
import Box from "@mui/material/Box";
import NewItems from "./NewItems";


/**
 * Section - サービス
 */
const ServiceSection = () => {

  return (
    <Box
      aria-label="content-service"
      component="section"
      sx={{ padding: "80px 0px" }}
    >
      {/*
      <Typography variant="h2" gutterBottom>
        サービスの特徴
      </Typography>
       */}
      <NewItems />
    </Box>
  );
};

export default ServiceSection;
