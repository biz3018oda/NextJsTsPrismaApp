import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ApplicationContainer from "@/components/layouts/ApplicationContainer";

/**
 * FAQ
 * 
 */
const ItemsPage = ({}) => {
  const title = "FAQ";
  const message =
    "山あいの静寂に寄り添う、1本の特別なヴィンテージ。そこにあるのは、幾重にも重なる芳醇な香りと、澄みきった余韻。樽の奥で静かに時を重ねた果実が、味わうたびに、新たな物語を語りはじめる。";

  return (
    <ApplicationContainer>
      <Box>
        <Container>
        <Typography variant="h3" component="h3" sx={{ py:3 }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection:'column' }}>
          <Typography variant="subtitle1" component="p" sx={{ py:3 }}>{message}</Typography>
          <Typography variant="subtitle1" component="p" sx={{ py:3 }}>{message}</Typography>
          <Typography variant="subtitle1" component="p" sx={{ py:3 }}>{message}</Typography>
          <Typography variant="subtitle1" component="p" sx={{ py:3 }}>{message}</Typography>
          <Typography variant="subtitle1" component="p" sx={{ py:3 }}>{message}</Typography>
        </Box>
      </Container>
      </Box>
    </ApplicationContainer>
  );
};

export default ItemsPage;
