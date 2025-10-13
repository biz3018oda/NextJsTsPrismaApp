"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Lineup from "./Lineup";

const info = [
  {
    id: 1,
    name: "Eleve",
    explain: "時間が育てた、唯一無二の一杯を",
    price: "9億1234万〜",
    img: "/blue-wine.jpeg",
    url: "http",
  },
  {
    id: 2,
    name: "Eleve",
    explain: "時間が育てた、唯一無二の一杯を",
    price: "9億1234万〜",
    img: "/blue-wine.jpeg",
    url: "http",
  },
  {
    id: 3,
    name: "Eleve",
    explain: "時間が育てた、唯一無二の一杯を",
    price: "9億1234万〜",
    img: "/blue-wine.jpeg",
    url: "http",
  },
  {
    id: 4,
    name: "Eleve",
    explain: "時間が育てた、唯一無二の一杯を",
    price: "9億1234万〜",
    img: "/blue-wine.jpeg",
    url: "http",
  },
  {
    id: 5,
    name: "Eleve",
    explain: "時間が育てた、唯一無二の一杯を",
    price: "9億1234万〜",
    img: "/blue-wine.jpeg",
    url: "http",
  },
];

/**
 * Section - コレクション
 */
const CollectionSection = () => {

  return (
    <Box
      aria-label="content-collection"
      component="section"
      sx={{ padding: "80px 40px" }}
    >
      <Typography variant="h3" gutterBottom>
        コレクション
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 5, sm: 8, md: 12 }}
        >
          {info.map(({ id, name, explain, price, img, url }) => (
            <Grid key={id} size={{ xs: 2, sm: 4, md: 3 }}>
              <Lineup
                name={name}
                explain={explain}
                price={price}
                img={img}
                url="http"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CollectionSection;
