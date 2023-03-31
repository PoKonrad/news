import { Box, Divider, Drawer, IconButton, List, ListSubheader, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidePanel, toggleSidePanel } from '../../features/sidePanelSlice';
import counties from '../../assets/countries.json';
import SideMenuItem from './SideMenuItem';
import type { Country } from '../../types';
import { useTranslation } from 'react-i18next';

const SideMenu = () => {
  const isOpen = useSelector(selectSidePanel);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClose = () => {
    dispatch(toggleSidePanel());
  };

  return (
    <Drawer open={isOpen.sidePanelOpen} onClose={handleClose}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          m: 1
        }}>
        <Typography variant="h6">gnNews</Typography>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box width="85vw" maxWidth="20rem">
        <List subheader={<ListSubheader>{t('country-selection')}</ListSubheader>}>
          {counties.map((country: Country) => (
            <SideMenuItem key={country.code} country={country} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
