'use client'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Main = () => {
  return (
    <Box component="main">
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      <Box sx={{
        backgroundImage: "url('/vine.jpeg')",
        display: "flex",
        height:"600px",
        objectFit:"contain",
        padding: "50px 80px",
        justifyContent:"flex-end",
        flexDirection:"column",
        alignItems: "center",
        textAlign: "center"
      }}>
        <Stack spacing={2} sx={{ alignItems:"center" }} >
          <Typography variant="h6">
          VinChain
          </Typography>
          <Typography variant="h4">
          THE TYPE A
          </Typography>
          <Button variant="contained" color="secondary" sx={{ width:"200px", padding:"12px 24px", borderRadius: "25px"}}>詳細を見る</Button>
        </Stack>
      </Box>
      <Box component="section" sx={{ p: 2 }}>
        <Typography variant="h2" gutterBottom>
        ネット予約
        </Typography>
      </Box>
      <Box component="section" sx={{ p: 2 }}>
        <Typography variant="h2" gutterBottom>
        お知らせ
        </Typography>
      </Box>
      <Box component="section" sx={{ p: 2 }}>
        <Typography variant="h2" gutterBottom>
        診療案内
        </Typography>
      </Box>
      <Box component="section" sx={{ p: 2 }}>
        <Typography variant="h2" gutterBottom>
        院内紹介
        </Typography>
      </Box>
      <Box component="section" sx={{ p: 2 }}>
        <Typography variant="h2" gutterBottom>
        よくある質問
        </Typography>
      </Box>
      <Box component="section" sx={{ p: 2 }}>
        <Typography variant="h2" gutterBottom>
        スタッフ紹介
        </Typography>
      </Box>
      <Box component="section" sx={{ p: 2 }}>
        <Typography variant="h2" gutterBottom>
        アクセス
        </Typography>
      </Box>
    </Box>
  );
}

export default Main;
