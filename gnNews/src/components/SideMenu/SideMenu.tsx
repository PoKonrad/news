import { Box, Drawer, IconButton, List, ListSubheader, Typography, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidePanel, toggleSidePanel } from '../../features/sidePanelSlice';
import countryList from '../../assets/countries.json';
import SideMenuItem from './SideMenuItem';
import type { Country } from '../../types';
import { useTranslation } from 'react-i18next';
import { useURLCountryParam } from '../../hooks/useURLCountryParam';
import { useFilter } from '../../hooks/useFilter';

const SideMenu = () => {
  const { filter, setFilter, countries } = useFilter(countryList);
  const isOpen = useSelector(selectSidePanel);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useURLCountryParam();

  const handleClose = () => {
    dispatch(toggleSidePanel());
  };

  return (
    <Drawer open={isOpen.sidePanelOpen} onClose={handleClose} data-testid="side-menu">
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
      <TextField
        data-testid="filter-input"
        value={filter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value.toLowerCase())
        }
        variant="outlined"
        label="Search"
        sx={{
          m: 1
        }}
      />
      <Box width="85vw" maxWidth="20rem">
        <List subheader={<ListSubheader>{t('country-selection')}</ListSubheader>}>
          {countries.map((countries: Country) => (
            <SideMenuItem key={countries.code} country={countries} data-testid="side-menu-item" />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
