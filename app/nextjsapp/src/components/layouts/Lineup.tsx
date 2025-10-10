import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

type Props = {
  name: string,
  explain: string,
  price: string,
  img: string,
  url: string
}

const Lineup = ({ name, explain, price, img, url }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Box sx={{ position:"relative" }}>
          <CardMedia
            component="img"
            height="340"
            image={img}
            alt="blue wine"
          />
          <Box
            sx={{
              position:"absolute",
              top:"50%",
              left:"50%",
              msTransform:"translate(-50%,-50%)",
              WebkitTransform:"translate(-50%,-50%)",
              transform:"translate(-50%,-50%)",
              textAlign:"center"
            }}
          >
            <Typography color='#ffffff' sx={{ fontWeight:"700", mb:1 }}>
              {explain}
            </Typography>
            <Typography color='#ffffff' sx={{ fontSize:"40px", fontWeight:"700" }}>
              {name}
            </Typography>
          </Box>
        </Box>
        <CardContent>
          <Typography variant="body2" gutterBottom>
            価格：
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Lineup;
