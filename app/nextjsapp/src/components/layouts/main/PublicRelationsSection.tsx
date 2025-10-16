"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';

/**
 * Section - 商品PR
 */
const PublicRelationsSection = () => {
  const serviceName = "VIN CHAIN";
  const wineName = "Vignoble Secret";
  const backgroundImageUrl = "/vine.jpeg";
  const btnTitle = "詳細を見る";
  const pageUrl = "/collection/VignobleSecret";

  return (
    <Box
      aria-label="content-title"
      sx={{
        backgroundImage: `url('${backgroundImageUrl}')`,
        display: "flex",
        height: "600px",
        objectFit: "contain",
        padding: "50px 80px",
        justifyContent: "flex-end",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Typography variant="h6">{serviceName}</Typography>
        <Typography variant="h4">{wineName}</Typography>
        <Button
          variant="contained"
          href={pageUrl}
          color="secondary"
          >
          {btnTitle}
        </Button>
      </Stack>
    </Box>
  );
};

export default PublicRelationsSection;
