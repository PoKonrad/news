import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
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
      sx={{ backgroundColor: 'white', height: 30 }}
      onChange={handleModeChange}>
      {buttons.map(({ value, Icon }) => (
        <ToggleButton value={value} data-testid={'toggleButton'}>
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
