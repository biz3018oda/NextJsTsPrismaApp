import React, { useState } from 'react';
import * as newItemsListsData from '../../../test/newItemsListsData.json';
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, CardMedia, Typography, MobileStepper, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


export default function NewItemsLists() {
  const steps = newItemsListsData['data'];
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
            <Box sx={{ width: '100%', height: 300 }}>
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
