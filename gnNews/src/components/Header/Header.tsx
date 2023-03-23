import {
  AppBar,
  Button,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { blue } from '@mui/material/colors';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch, useSelector } from 'react-redux';
import { selectViewMode, setViewMode } from '../../features/viewModeSlice';
import { toggleSidePanel } from '../../features/sidePanelSlice';
import LanguageSelection from './LanguageSelection';

const Header = () => {
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

  const handleMenuClick = () => {
    dispatch(toggleSidePanel());
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          size="large"
          edge="start"
          sx={{ mr: 2 }}
          onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          gnNews
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: 'flex'
          }}>
          <ToggleButtonGroup
            exclusive
            value={mode.viewMode}
            color="standard"
            size="small"
            sx={{ backgroundColor: blue[50] }}
            onChange={handleModeChange}>
            <ToggleButton value="grid" data-testid="gridToggle">
              <ViewModuleIcon /> <Typography variant="button">Grid</Typography>
            </ToggleButton>
            <ToggleButton value="list" data-testid="listToggle">
              <ViewListIcon />{' '}
              <Typography
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'block'
                  }
                }}
                variant="button">
                List
              </Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Box
          sx={{
            display: 'flex'
          }}>
          <Button
            endIcon={<InfoIcon />}
            sx={{
              my: 2,
              color: 'white'
            }}>
            <Typography
              variant="button"
              sx={{
                display: {
                  xs: 'none',
                  sm: 'flex'
                }
              }}>
              Project Info
            </Typography>
          </Button>
          <LanguageSelection />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
