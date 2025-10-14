"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ApplicationContainer from '@/components/layouts/ApplicationContainer';


const HeroSection = ({}) => {
  const serviceName = "VIN CHAIN";
  const wineName = "Vignoble Secret";
  const backgroundImageUrl = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e";
  const message = "山あいの静寂に寄り添う、1本の特別なヴィンテージ。そこにあるのは、幾重にも重なる芳醇な香りと、澄みきった余韻。樽の奥で静かに時を重ねた果実が、味わうたびに、新たな物語を語りはじめる。";

    return (
      <ApplicationContainer>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "80vh", md: "100vh" },
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* オーバーレイ（半透明の黒背景） */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            }}
          />
          <Container
            maxWidth="md"
            sx={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
            }}
          >
            {/* ロゴ部分 */}
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.1em",
                mb: 4,
              }}
            >
              {serviceName}
            </Typography>
            {/* リード文 */}
            <Typography
              variant="h6"
              sx={{
                whiteSpace: "pre-line",
                lineHeight: 1.8,
              }}
            >
            {message}
            </Typography>
          </Container>
        </Box>
      </ApplicationContainer>
    );
};

export default HeroSection;
