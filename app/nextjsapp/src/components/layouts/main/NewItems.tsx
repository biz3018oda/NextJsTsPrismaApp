import React from 'react';
import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material';

const bgImg = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"

export default function NewItems() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 8, sm: 12 },
        backgroundImage: 'url(' + bgImg + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff', // 白文字にしてコントラストを確保
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // ← 半透明の黒で読みやすく
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{ position: 'relative', zIndex: 2 }} // 背景より上に
      >
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mb: 2,
            textAlign: 'center',
            letterSpacing: 1,
            color: 'grey.300',
            fontSize: '1rem',
          }}
        >
          About VIN CHAIN
        </Typography>

        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ display: "flex", flexDirection:"column" }}
        >
          <span>山梨から始まる</span>
          <span>あなただけの</span>
          <span>ワイン体験</span>
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            mt: 3,
            maxWidth: 600,
            mx: 'auto',
            lineHeight: 1.8,
            color: 'grey.100',
            display: "flex",
            flexDirection:"column",
            fontWeight:"700",
          }}
        >
          <span>ここで手にするのは、ただのワインではありません。</span>
          <span>山梨の豊かな自然が育んだ希少なワインとともに、特別な場所や時間、</span>
          <span>そして豊かな体験があなたのものに。</span>
          <span>ワインの魅力が広がる先に、あなたの新しいライフスタイルが待っています。</span>
          <span>今こそ、あなただけの贅沢なワインの世界へ。</span>
        </Typography>
      </Container>
    </Box>
  );
}
