import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import LanguageIcon from '@mui/icons-material/Language';
import { Box } from '@mui/system';

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
    <>
      <Menu
        open={languageSelectOpen}
        onClose={handleCloseLanguageMenu}
        anchorEl={anchorElLanguage}
        transformOrigin={{ horizontal: -110, vertical: 'center' }}>
        {languages.map((language) => (
          <MenuItem key={language.value} onClick={handleCloseLanguageMenu}>
            <MenuIcon>
              <GridViewIcon />
            </MenuIcon>
            {language.label}
          </MenuItem>
        ))}
      </Menu>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={handleOpenLanguageMenu}>
        <MenuIcon>
          <LanguageIcon />
        </MenuIcon>
        Language
      </Box>
    </>
  );
};

export default LanguageSelection;
