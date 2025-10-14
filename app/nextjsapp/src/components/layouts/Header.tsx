'use client'
import * as React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme/theme";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import CameraIcon from '@mui/icons-material/Camera';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from '@mui/material/Link';


// const pages = ['コレクション', 'VinChainとは', '始め方', 'FAQ'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

let pages: { id: number, title: string; url: string }[] = [
    {
      id: 1,
      title: 'コレクション',
      url: '/collection',
    },
    {
      id: 2,
      title: 'VinChainとは',
      url: '/how-to-service',
    },
    {
      id: 3,
      title: '始め方',
      url: '/start',
    },
    {
      id: 4,
      title: 'FAQ',
      url: '/faq',
    }
];

const Header = () => {
  const cookieUsers = {
    familyname: "",
    firstname: "",
    img: "",
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container
          maxWidth="xl"
          sx={{
            borderBottom: "1px solid",
            borderColor: "#e9e9eb"
          }}
        >
          <Toolbar disableGutters>
            <Link href="/" color="secondary"><CameraIcon /></Link>
            <Box aria-label="menu-block" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}></Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                aria-label="menu-sp"
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link href={page.url} color="primary.contrastText" sx={{ textAlign: 'center' }}>{page.title}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: 'flex', md: 'none' },
                mr: 2,
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box
              aria-label="menu-pc"
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
            >
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  href={page.url}
                  sx={{ my: 2, color: 'primary.contrastText', display: 'block' }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, gap:2, alignItems:"center" }}>
                <Typography
                  sx={{ display: { xs: 'none', md: 'block' }, color:"secondary.main" }}
                >
                  {cookieUsers.familyname}{cookieUsers.firstname}
                </Typography>
                {/*
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    size="large"
                    aria-label="account of current user"
                    color="inherit"
                  >
                    <Avatar
                      alt="account-img"
                      src={cookieUsers.img}
                      sx={{
                        width:"40px",
                        height:"40px",
                        border:"3px solid",
                        borderColor:"secondary.main",
                        borderRadius:"50%",
                        backgroundSize:"200px 200px",
                        backgroundPosition: "right bottom"
                      }}
                    />
                  </IconButton>
                </Tooltip>
                */}
  
              </Box>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Header;
