"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PeopleLists from "./PeopleLists";


/**
 * Section - 保有する人々
 */
const PeopleSection = () => {
  const title = "保有する人々";

  return (
    <Box
      aria-label="content-people"
      component="section"
      sx={{ padding: "80px 40px" }}
    >
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      <PeopleLists />
    </Box>
  );
};

export default PeopleSection;
