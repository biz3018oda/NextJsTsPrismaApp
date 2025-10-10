'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Main = () => {
  return (
    <Box component="main" sx={{ p: 2 }}>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      <Box>

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
