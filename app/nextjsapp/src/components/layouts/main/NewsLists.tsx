import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, CardMedia, Typography, MobileStepper, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


const steps = [
  {
    id:1,
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id:2,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    id:3,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    id:4,
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    id:5,
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    id:6,
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id:7,
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    id:8,
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    id:9,
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    id:10,
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    id:11,
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    id:12,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

export default function NewsLists() {
  const rowNum = 3; // 表示する列の数
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = Math.ceil(steps.length / rowNum); // 3列ごとにページが進む

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  // 1ページに表示する3つのアイテム
  const displayPeople = steps.slice(activeStep * rowNum, (activeStep + 1) * rowNum);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
          backgroundColor: 'unset',
          justifyContent: 'center',
          mt: 5,
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              color: 'secondary.dark',
              backgroundColor: 'secondary.light',
              borderRadius: '50%',
              padding: '0',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 'unset',
            }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft sx={{ width: '1em', height: '1em', objectFit: 'contain' }} />
            ) : (
              <KeyboardArrowRight sx={{ width: '1em', height: '1em', objectFit: 'contain' }} />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              color: 'secondary.light',
              backgroundColor: 'secondary.dark',
              borderRadius: '50%',
              padding: '0',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 'unset',
            }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight sx={{ width: '1em', height: '1em', objectFit: 'contain' }} />
            ) : (
              <KeyboardArrowLeft sx={{ width: '1em', height: '1em', objectFit: 'contain' }} />
            )}
          </Button>
        }
      />

      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          width: '100%',
          gap: 2,
          px: 2,
        }}
        aria-label="image-ul"
      >
      {displayPeople.map((person) => (
        <Box
          key={person.id}
          sx={{
            width: '33.33%',
            padding: 1,
            boxSizing: 'border-box',
          }}
          aria-label="image-list-over"
        >
          <ImageListItem
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              overflow: 'hidden',
            }}
            aria-label="image-list"
          >
            {/* 画像部分を高さ固定の Box で囲む */}
            <Box sx={{ width: '100%', height: 250 }}>
              <img
                srcSet={`${person.img}?w=600&fit=crop&auto=format&dpr=2 2x`}
                src={`${person.img}?w=600&fit=crop&auto=format`}
                alt={person.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
            {/* タイトルと著者を表示 */}
            <ImageListItemBar
              title={person.title}
              subtitle={person.author}
              actionIcon={
                <IconButton sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  <InfoIcon />
                </IconButton>
              }
              sx={{
                background: 'rgba(0,0,0,0.6)',
                height: 56,
              }}
            />
          </ImageListItem>
        </Box>
      ))}
      </Box>
    </Box>
  );
}
