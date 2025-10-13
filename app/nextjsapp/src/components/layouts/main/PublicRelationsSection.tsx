"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

/**
 * Section - 商品PR
 */
const PublicRelationsSection = () => {
  const serviceName = "VinChain";
  const wineName = "THE TYPE A";
  const backgroundImageUrl = "/vine.jpeg";

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
          color="secondary"
          sx={{ width: "200px", padding: "12px 24px", borderRadius: "25px" }}
        >
          詳細を見る
        </Button>
      </Stack>
    </Box>
  );
};

export default PublicRelationsSection;
