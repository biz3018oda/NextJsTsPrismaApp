'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const pages = ['iiProducts', 'Pricing', 'Blog'];

const Footer = () => {
  return (
    <AppBar
      color="primary"
      component="footer"
      // staticで最下部
      position="static"
      sx={{ marginTop: 'auto' }}
    >
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Typography variant="h6" component="div">
              Scroll to hide App bar
            </Typography>
          </Toolbar>
    </AppBar>
  )
}

export default Footer;
