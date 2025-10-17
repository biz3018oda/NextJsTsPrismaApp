import React, { useEffect, useState } from 'react';
// import * as newsListsData from '../../../test/newsListsData.json';
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, MobileStepper, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

type News = {
  id: number;
  name: string;
  date: string;
  description: string;
  image: string;
};

export default function NewsLists() {
  // const steps = newsListsData['data'];

    const [items, setItems] = useState<News[]>([]);

    useEffect(() => {
      fetch("/api/news")
        .then((res) => res.json())
        .then((data) => {
          console.log("---get news result---:", data);
          setItems(data);
        });
    }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const maxSteps = Math.ceil(items.length / 3); // 3列

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleExpandClick = (id: number) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const displayPeople = items.slice(activeStep * 3, (activeStep + 1) * 3);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1, gap: 2, backgroundColor: 'unset', justifyContent: 'center', mt: 5 }}
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

      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: 2, px: 2, mt: 2 }}>
        {displayPeople.map((person) => (
          <Card key={person.id} sx={{ width: 'calc(33.33% - 16px)', maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "secondary.main" }} aria-label="person">
                  {person.name[0]}
                </Avatar>
              }
              title={person.name}
              subheader={person.date}
            />
            <CardMedia
              component="img"
              height="194"
              image={person.image}
              alt={person.name}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {person.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
