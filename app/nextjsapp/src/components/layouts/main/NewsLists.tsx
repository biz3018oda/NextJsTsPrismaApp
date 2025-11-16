import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  MobileStepper,
  Button,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

type News = {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
};

export default function NewsLists() {
  const [items, setItems] = useState<News[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const theme = useTheme();
  const itemsPerPage = 3;

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        console.log("---get news result---:", data);
        // 配列チェック
        if (Array.isArray(data)) setItems(data);
        else if (Array.isArray(data.news)) setItems(data.news);
        else setItems([]);
      })
      .catch((err) => {
        console.error("fetch news error:", err);
        setItems([]);
      });
  }, []);

  const maxSteps = Math.ceil(items.length / itemsPerPage);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 0, 0));
  };

  // slice 前に配列チェック
  const displayPeople = Array.isArray(items)
    ? items.slice(activeStep * itemsPerPage, (activeStep + 1) * itemsPerPage)
    : [];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {/* ページネーション */}
      <MobileStepper
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
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
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
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />

      {/* ニュースカード */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: 2,
          px: 2,
          mt: 2,
        }}
      >
        {displayPeople.map((news) => (
          <Card
            key={news.id}
            sx={{ width: "calc(33.33% - 16px)", maxWidth: 345 }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "secondary.main" }}>
                  {news.name[0]}
                </Avatar>
              }
              title={news.name}
              subheader={news.date}
            />
            <CardMedia
              component="img"
              height="194"
              image={news.image}
              alt={news.name}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {news.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
