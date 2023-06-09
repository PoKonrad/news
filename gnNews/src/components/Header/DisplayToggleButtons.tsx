import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { selectViewMode, setViewMode } from '../../features/viewModeSlice';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const DisplayButton: React.FC = () => {
  const { t } = useTranslation();
  const buttons = [
    {
      value: 'list',
      text: t('list'),
      Icon: <ViewModuleIcon />
    },
    {
      value: 'grid',
      text: t('grid'),
      Icon: <ViewListIcon />
    }
  ];

  const mode = useAppSelector(selectViewMode);
  const dispatch = useAppDispatch();

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
      {buttons.map(({ value, Icon, text }) => (
        <ToggleButton
          key={value}
          value={value}
          data-testid={'toggle-button'}
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
          <Typography variant="button">{text}</Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default DisplayButton;
