import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { selectViewMode, setViewMode } from '../../features/viewModeSlice';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const buttons = [
  {
    value: 'grid',
    Icon: <ViewModuleIcon />
  },
  {
    value: 'list',
    Icon: <ViewListIcon />
  }
];

const DisplayButton: React.FC = () => {
  const mode = useSelector(selectViewMode);
  const dispatch = useDispatch();

  const handleModeChange = (event: React.MouseEvent<HTMLElement>, newMode: string) => {
    if (newMode === null) {
      return;
    }
    dispatch(
      setViewMode({
        newMode: newMode
      })
    );
  };

  return (
    <ToggleButtonGroup
      exclusive
      value={mode.viewMode}
      color="standard"
      size="small"
      sx={{ backgroundColor: 'none', height: 30, outline: 'none' }}
      onChange={handleModeChange}>
      {buttons.map(({ value, Icon }) => (
        <ToggleButton
          value={value}
          data-testid={'toggleButton'}
          sx={{
            border: 'none',
            borderRadius: 10,
            color: 'white',
            opacity: 0.6,
            '&.Mui-selected': {
              color: 'white',
              opacity: 1
            },
            mx: 0.5
          }}>
          {Icon}
          <Typography
            sx={{
              display: {
                xs: 'none',
                sm: 'block'
              }
            }}
            variant="button">
            {value}
          </Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default DisplayButton;