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
    id: 1,
    label:'VIN CHAIN YAMANASHI',
    name:'type B',
    description: `2026年夏販売開始予定`,
  },
  {
    id: 2,
    label:'VIN CHAIN KANAGAWA',
    name:'type C',
    description:'2027年夏販売開始予定',
  },
  {
    id: 3,
    label:'VIN CHAIN AKITA',
    name:'type D',
    description: `2028年夏販売開始予定`,
  },
  {
    id: 4,
    label:'VIN CHAIN YAMANASHI',
    name:'type B',
    description: `2026年夏販売開始予定`,
  },
  {
    id: 5,
    label:'VIN CHAIN KANAGAWA',
    name:'type C',
    description:'2027年夏販売開始予定',
  },
  {
    id: 6,
    label:'VIN CHAIN AKITA',
    name:'type D',
    description: `2028年夏販売開始予定`,
  },
  {
    id: 7,
    label:'VIN CHAIN YAMANASHI',
    name:'type B',
    description: `2026年夏販売開始予定`,
  },
  {
    id: 8,
    label:'VIN CHAIN KANAGAWA',
    name:'type C',
    description:'2027年夏販売開始予定',
  },
  {
    id: 9,
    label:'VIN CHAIN AKITA',
    name:'type D',
    description: `2028年夏販売開始予定`,
  },
  {
    id: 10,
    label:'VIN CHAIN YAMANASHI',
    name:'type B',
    description: `2026年夏販売開始予定`,
  },
  {
    id: 11,
    label:'VIN CHAIN KANAGAWA',
    name:'type C',
    description:'2027年夏販売開始予定',
  },
  {
    id: 12,
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

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        {/* 左のBOX */}
        <Box sx={{ border: "2px solid", width: 200 }}>
          {steps[activeStep - 1] ? (
            <>
              <Paper
                square
                elevation={0}
                sx={{
                  backgroundColor: "secondary.main",
                  textAlign: "center",
                }}
              >
                <Typography>{steps[activeStep - 1].label}</Typography>
              </Paper>
              <Box
                sx={{
                  height: 255,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography>{steps[activeStep - 1].name}</Typography>
                <Typography>{steps[activeStep - 1].description}</Typography>
              </Box>
            </>
          ) : (
            <Box sx={{ height: 305 }} /> // 空白スペース確保
          )}
        </Box>
        {/* 中央のBOX（active） */}
        <Box
          sx={{
            border: "2px solid",
            width: 200,
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              backgroundColor: "secondary.main",
              textAlign: "center",
            }}
          >
            <Typography>{steps[activeStep].label}</Typography>
          </Paper>
          <Box
            sx={{
              height: 255,
              p: 2,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography>{steps[activeStep].name}</Typography>
            <Typography>{steps[activeStep].description}</Typography>
          </Box>
        </Box>
        {/* 右のBOX */}
        <Box sx={{ border: "2px solid", width: 200 }}>
          {steps[activeStep + 1] ? (
            <>
              <Paper
                square
                elevation={0}
                sx={{
                  backgroundColor: "secondary.main",
                  textAlign: "center",
                }}
              >
                <Typography>{steps[activeStep + 1].label}</Typography>
              </Paper>
              <Box
                sx={{
                  height: 255,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography>{steps[activeStep + 1].name}</Typography>
                <Typography>{steps[activeStep + 1].description}</Typography>
              </Box>
            </>
          ) : (
            <Box sx={{ height: 305 }} /> // 空白スペース確保
          )}
        </Box>
      </Box>
    </Box>
  );
}
