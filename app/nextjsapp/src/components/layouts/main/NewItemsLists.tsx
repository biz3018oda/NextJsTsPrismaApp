import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, MobileStepper, Button, IconButton } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import InfoIcon from "@mui/icons-material/Info";

type NewItem = {
  id: number;
  img: string;
  title: string;
  author: string;
};

export default function NewItemsLists() {
  const [items, setItems] = useState<NewItem[]>([]);
  const rowNum = 3; // 1ページに表示する列数
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    fetch("/api/newItems")
      .then((res) => res.json())
      .then((data) => {
        console.log("---get new result---:", data);
        // 配列かどうかチェックして安全にセット
        if (Array.isArray(data)) {
          setItems(data);
        } else if (Array.isArray(data.items)) {
          setItems(data.items);
        } else {
          setItems([]);
        }
      })
      .catch((err) => {
        console.error("fetch error:", err);
        setItems([]);
      });
  }, []);

  const maxSteps = Math.ceil(items.length / rowNum);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const displayItems = Array.isArray(items)
    ? items.slice(activeStep * rowNum, (activeStep + 1) * rowNum)
    : [];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <MobileStepper
        aria-label="stepper-btn"
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          maxWidth: 400,
          flexGrow: 1,
          gap: 2,
          backgroundColor: "unset",
          justifyContent: "center",
          mt: 5,
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
              padding: 0,
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "unset",
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft sx={{ width: "1em", height: "1em" }} />
            ) : (
              <KeyboardArrowRight sx={{ width: "1em", height: "1em" }} />
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
              padding: 0,
              width: 30,
              height: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "unset",
            }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight sx={{ width: "1em", height: "1em" }} />
            ) : (
              <KeyboardArrowLeft sx={{ width: "1em", height: "1em" }} />
            )}
          </Button>
        }
      />

      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          gap: 2,
          px: 2,
          mt: 2,
        }}
        aria-label="image-list"
      >
        {displayItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "33.33%",
              padding: 1,
              boxSizing: "border-box",
            }}
          >
            <ImageListItem
              sx={{ borderRadius: 2, boxShadow: 3, overflow: "hidden" }}
            >
              <Box sx={{ width: "100%", height: 300 }}>
                <img
                  src={`${item.img}?w=600&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=600&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    <InfoIcon />
                  </IconButton>
                }
                sx={{ background: "rgba(0,0,0,0.6)", height: 56 }}
              />
            </ImageListItem>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
