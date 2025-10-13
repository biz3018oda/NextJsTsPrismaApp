"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Lineup from "./Lineup";
import CollectionLists from "./CollectionLists";

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
  const title = "コレクション";

  return (
      <Box
        aria-label="content-collection"
      >
        <Box
          component="section"
          sx={{ padding: "80px 40px" }}
        >
          <Typography variant="h2" gutterBottom>
            {title}
          </Typography>
          <CollectionLists />
        </Box>
      </Box>
  );
};

export default CollectionSection;
