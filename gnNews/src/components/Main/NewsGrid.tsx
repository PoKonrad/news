import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { Article } from '../../types';
import { useGetNewsForCountry } from '../../hooks/useGetNewsForCountry';
const NewsGrid = () => {
  const { data, error, isLoading } = useGetNewsForCountry();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
      {isLoading && <div>Loading...</div>}
      {data?.articles.map((article: Article) => (
        <Card
          sx={{ maxWidth: '20rem', height: '29rem', flexGrow: 1, borderRadius: 5 }}
          key={article.url}>
          <CardActionArea sx={{ height: '100%', width: '100%' }}>
            <CardMedia component="img" height={200} image={article.urlToImage} />
            <CardContent
              sx={{
                padding: '1.4rem',
                height: '100%'
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
              <Divider sx={{ my: 1 }} light />
              <Typography variant="h6" component="div" fontWeight={600}>
                {article?.title?.slice(0, 80)}...
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
                {article?.description?.slice(0, 100)}...
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default NewsGrid;
