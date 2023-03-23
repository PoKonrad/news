import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import LanguageIcon from '@mui/icons-material/Language';

const languages = [
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'pl',
    label: 'Polski'
  }
];

const LanguageSelection = () => {
  const [languageSelectOpen, setLanguageSelectOpen] = useState(false);
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(null);
  const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLanguage(event.currentTarget);
    setLanguageSelectOpen(true);
  };

  const handleCloseLanguageMenu = () => {
    setLanguageSelectOpen(false);
    setAnchorElLanguage(null);
  };
  return (
    <div>
      {' '}
      <Menu open={languageSelectOpen} onClose={handleCloseLanguageMenu} anchorEl={anchorElLanguage}>
        {languages.map((language) => (
          <MenuItem key={language.value} onClick={handleCloseLanguageMenu}>
            <MenuIcon sx={{ mr: 1 }}>
              <GridViewIcon />
            </MenuIcon>
            {language.label}
          </MenuItem>
        ))}
      </Menu>
      <IconButton sx={{ my: 2, color: 'white', display: 'flex' }} onClick={handleOpenLanguageMenu}>
        <LanguageIcon />
      </IconButton>
    </div>
  );
};

export default LanguageSelection;
