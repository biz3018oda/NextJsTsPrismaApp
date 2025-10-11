import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, CardMedia, Typography, MobileStepper, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    id: 1,
    name: 'A.Bさん',
    description: '自然の中で土に触れ、ワインを楽しむ贅沢なひととき。',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  },
  {
    id: 2,
    name: 'C・Dさん',
    description: '平日は東京、週末はワイナリーのそばで静かな時間を。',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  },
  {
    id: 3,
    name: 'E・Fさん',
    description: 'お気に入りの1本から始まる、奥深い知識の旅。',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  },
  {
    id: 4,
    name: 'G・Hさん',
    description: '自然の中で土に触れ、ワインを楽しむ贅沢なひととき。',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  },
  {
    id: 5,
    name: 'I・Jさん',
    description: '平日は東京、週末はワイナリーのそばで静かな時間を。',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  },
  {
    id: 6,
    name: 'K・Lさん',
    description: 'お気に入りの1本から始まる、奥深い知識の旅。',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  },
  {
    id: 7,
    name: 'I・Jさん',
    description: '平日は東京、週末はワイナリーのそばで静かな時間を。',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  },
  {
    id: 8,
    name: 'K・Lさん',
    description: 'お気に入りの1本から始まる、奥深い知識の旅。',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  },
  {
    id: 9,
    name: 'I・Jさん',
    description: '平日は東京、週末はワイナリーのそばで静かな時間を。',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  },
  {
    id: 10,
    name: 'K・Lさん',
    description: 'お気に入りの1本から始まる、奥深い知識の旅。',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  },
];

export default function PeopleLivingWithWine() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = Math.ceil(steps.length / 4); // 4列ごとにページが進む

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  // 1ページに表示する4つのアイテム
  const displayPeople = steps.slice(activeStep * 4, (activeStep + 1) * 4);

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

      <Box sx={{ display: 'flex', overflow: 'hidden', justifyContent: 'center', gap: 2 }}>
        {displayPeople.map((person) => (
          <Box
            key={person.id}
            sx={{
              px: 2,
              pb: 2,
              width: displayPeople.length === 1 ? '100%' : 'calc(25% - 16px)', // 1つだけの時は100%、それ以外は4列表示
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card sx={{ borderRadius: 2, boxShadow: 3, width: '100%' }}>
              <CardMedia
                component="img"
                height="220"
                image={person.image}
                alt={person.name}
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
              <CardContent sx={{ display:"flex", flexDirection:"column", gap:1 }}>
                <Typography variant="h6" color="text.secondary">
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {person.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
