import NewsGrid from './NewsGrid';
import { useDispatch, useSelector } from 'react-redux';
import { selectViewMode, setViewMode } from '../../features/viewModeSlice';
import NewsList from './NewsList';
import { Fade } from '@mui/material';
import { Box } from '@mui/system';

const Main = () => {
  const currentDisplayMode = useSelector(selectViewMode);
  const dispatch = useDispatch();

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
