import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { useArticlePopup } from '../../hooks/useArticlePopup';
import { useGetNewsForCountry } from '../../hooks/useGetNewsForCountry';
import { Article } from '../../types';

const NewsList = () => {
  const { data, error, isLoading } = useGetNewsForCountry();

  const openArticle = useArticlePopup();

  if (error) {
    return <div> Something went wrong... </div>;
  }

  return (
    <Box>
      <List>
        {isLoading && <div>Loading...</div>}
        {data?.articles.map((article: Article) => (
          <ListItem divider key={article.url}>
            <ListItemButton
              onClick={() => {
                openArticle(article);
              }}>
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
        ))}
      </List>
    </Box>
  );
};

export default NewsList;
