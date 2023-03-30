import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
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
      size="small"
      sx={{ backgroundColor: 'none', height: 30, outline: 'none', mx: 1 }}
      onChange={handleModeChange}>
      {buttons.map(({ value, Icon }) => (
        <ToggleButton
          key={value}
          value={value}
          data-testid={'toggleButton'}
          sx={{
            border: 'none',
            borderRadius: 10,
            opacity: 0.6,
            '&.Mui-selected': {
              color: 'primary.main',
              opacity: 1
            }
          }}>
          {Icon}
          <Typography variant="button">{value}</Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default DisplayButton;
