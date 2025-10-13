"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PeopleLivingWithWine from "./PeopleLivingWithWine";


/**
 * Section - 保有する人々
 */
const PeopleSection = () => {

  return (
    <Box
      aria-label="content-people"
      component="section"
      sx={{ padding: "80px 40px" }}
    >
      <Typography variant="h2" gutterBottom>
        保有する人々
      </Typography>
      <PeopleLivingWithWine />
    </Box>
  );
};

export default PeopleSection;
