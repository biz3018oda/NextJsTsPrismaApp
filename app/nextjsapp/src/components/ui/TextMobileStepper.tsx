import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label:'VIN CHAIN YAMANASHI',
    name:'type B',
    description: `2026年夏販売開始予定`,
  },
  {
    label:'VIN CHAIN KANAGAWA',
    name:'type C',
    description:'2027年夏販売開始予定',
  },
  {
    label:'VIN CHAIN AKITA',
    name:'type D',
    description: `2028年夏販売開始予定`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
      }}
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
          gap:2,
          backgroundColor:"unset"
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              backgroundColor:"primary.main",
              color: "secondary.dark",
              borderRadius:"50%",
              padding:"0",
              width:"30px",
              height:"30px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              minWidth:"unset",
            }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft sx={{ width:"1em", height:"1em", objectFit:"contain" }} />
            ) : (
              <KeyboardArrowRight sx={{ width:"1em", height:"1em", objectFit:"contain" }} />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              backgroundColor:"secondary.dark",
              borderRadius:"50%",
              padding:"0",
              width:"30px",
              height:"30px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              minWidth:"unset",
            }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight sx={{ width:"1em", height:"1em", objectFit:"contain" }} />
            ) : (
              <KeyboardArrowLeft sx={{ width:"1em", height:"1em", objectFit:"contain" }} />
            )}
          </Button>
        }
      />

      <Box sx={{ display:"flex" }}>
      {steps.map((step) => (
        <Box key={step.name} sx={{ border:"2px solid" }}>
          <Paper
            square
            elevation={0}
            sx={{
              //display: 'flex',
              //alignItems: 'center',
              //height: 50,
              // bgcolor: 'background.default',
              backgroundColor:"secondary.main",
            }}
          >
            <Typography>{step.label}</Typography>
          </Paper>
          <Box
            sx={{
              height: 255,
              maxWidth: 400,
              width: '100%',
              p: 2,
              display:"flex",
              flexDirection:"column",
              textAlign:"center",
            }}
          >
            <Typography>{step.name}</Typography>
            <Typography>{step.description}</Typography>
          </Box>
        </Box>
      ))}
      </Box>
    </Box>
  );
}
