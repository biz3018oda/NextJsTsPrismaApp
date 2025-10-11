"use client";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Lineup from "./Lineup";
import TextMobileStepper from "../../ui/TextMobileStepper";

const serviceName = "VinChain";
const wineName = "THE TYPE A";

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

const Main = () => {
  return (
    <Box component="main">
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      <Box
        sx={{
          backgroundImage: "url('/vine.jpeg')",
          display: "flex",
          height: "600px",
          objectFit: "contain",
          padding: "50px 80px",
          justifyContent: "flex-end",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          <Typography variant="h6">{serviceName}</Typography>
          <Typography variant="h4">{wineName}</Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "200px", padding: "12px 24px", borderRadius: "25px" }}
          >
            詳細を見る
          </Button>
        </Stack>
      </Box>
      <Box component="section" sx={{ padding: "80px 40px" }}>
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
      <Box sx={{ backgroundColor:"secondary.main" }}>
        <Box component="section" sx={{ padding: "80px 40px" }}>
          <Typography variant="h2" sx={{ color:"#ffffff" }} gutterBottom>
            新着ワイン
          </Typography>
          <TextMobileStepper />
        </Box>
      </Box>
      <Box component="section" sx={{ padding: "80px 40px" }}>
        <Typography variant="h2" gutterBottom>
          NEWS
        </Typography>
      </Box>
      <Box component="section" sx={{ padding: "80px 40px" }}>
        <Typography variant="h2" gutterBottom>
          サービスの特徴
        </Typography>
      </Box>
      <Box component="section" sx={{ padding: "80px 40px" }}>
        <Typography variant="h2" gutterBottom>
          保有する人々
        </Typography>
      </Box>
    </Box>
  );
};

export default Main;
