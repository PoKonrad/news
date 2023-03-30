import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InfoIcon from '@mui/icons-material/Info';
import { Divider, IconButton, ListItemIcon } from '@mui/material';
import { Settings } from '@mui/icons-material';
import DisplayToggleButtons from './DisplayToggleButtons';
import { useDispatch, useSelector } from 'react-redux';
import { setInfoDialogState } from '../../features/infoDialogSlice';
import LanguageItem from './LanguageItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const handleInfoClick = () => {
    dispatch(setInfoDialogState(true));
    handleClose();
  };

  const languages = [
    {
      language: 'en',
      fullLanguage: 'English'
    },
    {
      language: 'pl',
      fullLanguage: 'Polski'
    }
  ];

  return (
    <div>
      <IconButton
        data-testid="settings-button"
        color="inherit"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <Settings />
      </IconButton>
      <Menu
        sx={{
          '& .MuiPaper-root': {
            minWidth: '10rem',
            maxWidth: '100%'
          },
          '& .MuiMenuItem-root': {
            xs: {
              minWidth: '10rem',
              maxWidth: '100%'
            }
          }
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}>
        <MenuItem onClick={handleInfoClick}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          Info
        </MenuItem>
        <Divider />
        <MenuItem disabled>Language</MenuItem>
        {languages.map((language) => (
          <LanguageItem
            key={language.language}
            language={language.language}
            fullLanguage={language.fullLanguage}
          />
        ))}
        <Divider />
        <MenuItem disabled>Display</MenuItem>
        <MenuItem disableRipple>
          <DisplayToggleButtons />
        </MenuItem>
      </Menu>
    </div>
  );
}
