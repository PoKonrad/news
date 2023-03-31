import { NewsGrid } from './NewsGrid';
import { selectViewMode, setViewMode } from '../../features/viewModeSlice';
import NewsList from './NewsList';
import { Fade } from '@mui/material';
import { Box } from '@mui/system';
import { useAppSelector } from '../../app/hooks';

const Main = () => {
  const currentDisplayMode = useAppSelector(selectViewMode);

  return (
    <Box>
      <Fade unmountOnExit mountOnEnter in={currentDisplayMode.viewMode === 'grid'}>
        <div>
          <NewsGrid />
        </div>
      </Fade>
      <Fade unmountOnExit mountOnEnter in={currentDisplayMode.viewMode === 'list'}>
        <div>
          <NewsList />
        </div>
      </Fade>
    </Box>
  );
};

export default Main;
