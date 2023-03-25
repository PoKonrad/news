import { Box, Divider, List, ListItem, ListItemButton, Typography } from '@mui/material';
import React from 'react';
import { useGetNewsQuery } from '../../features/newsApi';

const NewsList = () => {
  const { data, error, isLoading } = useGetNewsQuery();

  return (
    <Box>
      <List>
        {isLoading && <div>Loading...</div>}
        {data?.articles.map((article) => (
          <>
            <ListItem divider key={article.url}>
              <ListItemButton>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    width: '100%'
                  }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                    <Typography variant="body2" color="text.secondary" fontWeight={600}>
                      {article?.source?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(article?.publishedAt).toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </Typography>
                  </Box>
                  <Typography variant="h6" component="div" fontWeight={600}>
                    {article?.title?.slice(0, 300)}...
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                      textOverflow: 'elipsis'
                    }}>
                    {article?.description?.slice(0, 200)}...
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );
};

export default NewsList;
