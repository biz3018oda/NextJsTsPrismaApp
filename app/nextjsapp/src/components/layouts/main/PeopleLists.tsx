import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  MobileStepper,
  Button,
} from '@mui/material';
import Link from '@mui/material/Link';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

interface Profile {
  id: number;
  name: string;
  nick: string;
  impressions: string;
  image: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: 'Emma Watson',
    nick: '@EmWatson',
    impressions: 'このワインを囲むと、不思議と会話が弾んで、心の距離もぐっと近づく気がします。',
    image:
      'https://s-media-cache-ak0.pinimg.com/236x/c5/86/e6/c586e6afd87ee357bbab52df241480ac.jpg',
  },
  {
    id: 2,
    name: 'Daniel Radcliffe',
    nick: '@DanRad',
    impressions: '一緒にワインを楽しむ時間が、自然と私たちの絆を深めてくれました。',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
  },
  {
    id: 3,
    name: 'Hermione Granger',
    nick: '@HGranger',
    impressions: '丁寧に選ばれた一本が、ただの食事を特別なひとときに変えてくれます。',
    image: 'https://images.unsplash.com/photo-1759784839707-a32c910a7747',
  },
  {
    id: 4,
    name: 'Ron Weasley',
    nick: '@RonW',
    impressions: 'このワインがあるだけで、家族や友人との距離が驚くほど近く感じられました。',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  },
  {
    id: 5,
    name: 'Luna Lovegood',
    nick: '@LLove',
    impressions: 'グラスを重ねるたびに、少しずつお互いの気持ちが近づいていくようでした。',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
  },
  {
    id: 6,
    name: 'Neville Longbottom',
    nick: '@NevLong',
    impressions: '特別なことはしていないのに、このワインがあるだけで心が通い合う気がします。',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c',
  },
  {
    id: 7,
    name: 'Ginny Weasley',
    nick: '@GinWeas',
    impressions: '静かに流れる時間とワインの香りが、自然と会話を深めてくれました。',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  },
  {
    id: 8,
    name: 'Severus Snape',
    nick: '@SSevSnape',
    impressions: '久しぶりに家族と本音で話せた気がします。きっとワインのおかげです。',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
  },
  {
    id: 9,
    name: 'Neville Longbottom',
    nick: '@NevLong',
    impressions: '特別なことはしていないのに、このワインがあるだけで心が通い合う気がします。',
    image: 'https://plus.unsplash.com/premium_photo-1758893734322-172b22ba5278',
  },
  {
    id: 10,
    name: 'Ginny Weasley',
    nick: '@GinWeas',
    impressions: '静かに流れる時間とワインの香りが、自然と会話を深めてくれました。',
    image: 'https://plus.unsplash.com/premium_photo-1759793983877-d1c49cdd37eb',
  },
  {
    id: 11,
    name: 'Severus Snape',
    nick: '@SSevSnape',
    impressions: '久しぶりに家族と本音で話せた気がします。きっとワインのおかげです。',
    image: 'https://images.unsplash.com/photo-1758539412442-23b83300f0bd',
  },
];

export default function EmmaProfilesGrid() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const itemsPerPage = 4;
  const maxSteps = Math.ceil(profiles.length / itemsPerPage);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const displayProfiles = profiles.slice(
    activeStep * itemsPerPage,
    activeStep * itemsPerPage + itemsPerPage
  );

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 5 }}>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ justifyContent: 'center', mt: 3, gap: 2, backgroundColor: 'transparent' }}
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

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'nowrap' }}>
        {displayProfiles.map((person) => (
          <Paper
            key={person.id}
            elevation={4}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              width: 'calc(25% - 12px)',
              boxShadow: 6,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {/* 背景画像 */}
            <Box
              sx={{
                height: 200,
                backgroundImage: `url(${person.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%)',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '40%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <Typography variant="h6" fontWeight={800} color="text.secondary">
                  {person.name}
                </Typography>
                <Typography variant="body2" fontWeight={500}>
                  {person.nick}
                </Typography>
              </Box>
            </Box>

            {/* Avatar（文字） */}
            <Avatar
              sx={{
                width: 64,
                height: 64,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%)',
                border: '3px solid',
                borderColor: 'secondary.light',
                boxShadow: 3,
                backgroundColor: 'secondary.main',
                color: 'secondary.light',
                fontWeight: 700,
                fontSize: '1.5rem',
              }}
            >
              {person.name.charAt(0)}
            </Avatar>

            {/* 統計エリア */}
            <Box
              sx={{
                textAlign: 'center',
                pt: 6,
                px: 2,
                pb: 2,
                // display: 'flex',
                // flexDirection: 'column',
                // gap: 1,
                backgroundColor:'#e0e0e0',
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
