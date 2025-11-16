import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  MobileStepper,
  Button,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

type Owner = {
  id: string;
  familyname: string;
  firstname: string;
  nick: string;
  impressions: string;
  image: string;
};

export default function PeopleLists() {
  const [items, setItems] = useState<Owner[]>([]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    fetch("/api/owners")
      .then((res) => res.json())
      .then((data) => {
        console.log("---get owner result---:", data);

        // data が配列ならそのまま、オブジェクトなら owners プロパティを参照
        if (Array.isArray(data)) {
          setItems(data);
        } else if (Array.isArray(data.owners)) {
          setItems(data.owners);
        } else {
          console.warn("APIレスポンスに配列が見つかりません:", data);
          setItems([]);
        }
      })
      .catch((err) => {
        console.error("API取得エラー:", err);
        setItems([]);
      });
  }, []);

  const maxSteps = Math.ceil(items.length / itemsPerPage);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  // slice 前に必ず配列チェック
  const displayProfiles = Array.isArray(items)
    ? items.slice(
        activeStep * itemsPerPage,
        activeStep * itemsPerPage + itemsPerPage
      )
    : [];

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 5 }}>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          justifyContent: "center",
          mt: 3,
          gap: 2,
          backgroundColor: "transparent",
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              color: "secondary.dark",
              backgroundColor: "secondary.light",
              borderRadius: "50%",
              padding: "0",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "unset",
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft
                sx={{ width: "1em", height: "1em", objectFit: "contain" }}
              />
            ) : (
              <KeyboardArrowRight
                sx={{ width: "1em", height: "1em", objectFit: "contain" }}
              />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              color: "secondary.light",
              backgroundColor: "secondary.dark",
              borderRadius: "50%",
              padding: "0",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "unset",
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight
                sx={{ width: "1em", height: "1em", objectFit: "contain" }}
              />
            ) : (
              <KeyboardArrowLeft
                sx={{ width: "1em", height: "1em", objectFit: "contain" }}
              />
            )}
          </Button>
        }
      />

      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          flexWrap: "nowrap",
        }}
      >
        {displayProfiles.map((person) => (
          <Paper
            key={person.id}
            elevation={4}
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              width: "calc(25% - 12px)",
              boxShadow: 6,
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              sx={{
                height: 200,
                backgroundImage: `url(${person.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%)",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={800}
                  color="text.secondary"
                >
                  {person.familyname}
                  {person.firstname}
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {person.nick}
                </Typography>
              </Box>
            </Box>

            <Avatar
              sx={{
                width: 64,
                height: 64,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%)",
                border: "3px solid",
                borderColor: "secondary.light",
                boxShadow: 3,
                backgroundColor: "secondary.main",
                color: "secondary.light",
                fontWeight: 700,
                fontSize: "1.5rem",
              }}
            >
              {person.firstname.charAt(0)}
            </Avatar>

            <Box
              sx={{
                textAlign: "center",
                pt: 6,
                px: 2,
                pb: 2,
                backgroundColor: "#e0e0e0",
              }}
            >
              <Box textAlign="left">
                <Typography variant="caption" color="text.secondary">
                  ご意見：
                </Typography>
                <Typography fontWeight="bold">{person.impressions}</Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
