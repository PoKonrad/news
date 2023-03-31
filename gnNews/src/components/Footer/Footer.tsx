import { FC, ReactElement } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetNewsForCountry } from '../../hooks/useGetNewsForCountry';
import { useClock } from '../../hooks/useClock';
import { color } from '@mui/system';

export const Footer: FC = (): ReactElement => {
  const { data, error, isLoading } = useGetNewsForCountry();
  const clock = useClock();
  return (
    <Box
      component={'footer'}
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'primary.main',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        color: 'primary.contrastText'
      }}>
      <Container>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">{clock}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Current number of Articles: {data?.articles.length}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
