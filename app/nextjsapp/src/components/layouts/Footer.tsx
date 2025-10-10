'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

let pages: { title: string; url: string }[] = [
    {
      title: '会社概要',
      url: '/company',
    },
    {
      title: '販売の流れ',
      url: '/how-to-buy',
    },
    {
      title: '利用規約',
      url: '/terms',
    },
    {
      title: 'プライバシーポリシー',
      url: 'privacy-policy',
    }
];

let copyright = "Copyright 2025 SAMPLE Inc.";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  // alignItems: 'flex-start',
  display: "flex",
  flexFlow: "column",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

const Footer = () => {
  return (
    <AppBar
      color="primary"
      component="footer"
      // staticで最下部
      position="static"
      sx={{ marginTop: 'auto' }}
    >
      <StyledToolbar>
        <Box sx={{ display: { xs: 'none', md: 'flex'}, gap:2 }}>
          {pages.map((page) => (
            <Link key={page.title} variant="body2" color="primary.contrastText" underline="none" sx={{ my: 2, display: 'block' }} href={page.url}>{page.title}</Link>
          ))}
        </Box>
        <Typography variant="caption" component="p">
          {copyright}
        </Typography>
      </StyledToolbar>
    </AppBar>
  )
}

export default Footer;
