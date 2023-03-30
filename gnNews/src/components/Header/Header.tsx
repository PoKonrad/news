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
import InfoIcon from '@mui/icons-material/Info';
import { useDispatch, useSelector } from 'react-redux';
import { selectViewMode, setViewMode } from '../../features/viewModeSlice';
import { toggleSidePanel } from '../../features/sidePanelSlice';
import LanguageSelection from './LanguageSelection';
import DisplayButton from './DisplayToggleButtons';
import DisplayToggleButtons from './DisplayToggleButtons';
import MobileMenu from './MobileMenu';

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
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          color="inherit"
          size="large"
          edge="start"
          sx={{
            mr: {
              xs: 0,
              sm: 2
            }
          }}
          onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          gnNews
        </Typography>
        <MobileMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
