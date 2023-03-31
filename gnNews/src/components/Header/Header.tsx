import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleSidePanel } from '../../features/sidePanelSlice';
import MobileMenu from './SettingsMenu';
import { useAppDispatch } from '../../app/hooks';

const Header = () => {
  const dispatch = useAppDispatch();

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
