import React, { useEffect, useState } from 'react';
// import * as CollectionListsData from '../../../test/collectionListsData.json';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import StarBorderIcon from '@mui/icons-material/StarBorder';

type Collections = {
  id: string;
  image: string;
  title: string;
  author: string;
};

const CollectionLists = () => {
  //const steps = CollectionListsData['data'];

  const [items, setItems] = useState<Collections[]>([]);
  useEffect(() => {
    fetch("/api/collections")
      .then((res) => res.json())
      .then((data) => {
        console.log("---get owner result---:", data);
        setItems(data);
      });
  }, []);

  const columns = 4;

  return (
    <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: 2,
          px: 2,
        }}
        aria-label="image-list"
      >
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              overflow: 'hidden',
              position: 'relative',
              height: 200,
            }}
          >
            <img
              src={`${item.image}?w=600&fit=crop&auto=format`}
              srcSet={`${item.image}?w=600&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              sx={{
                background: 'rgba(177, 173, 173, 0.65)',
                height: 56,
                position: 'absolute',
                bottom: 0,
                width: '100%',
              }}
              // position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CollectionLists;
