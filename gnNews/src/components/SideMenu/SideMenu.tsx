import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListSubheader,
  Typography,
  TextField
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidePanel, toggleSidePanel } from '../../features/sidePanelSlice';
import counties from '../../assets/countries.json';
import SideMenuItem from './SideMenuItem';
import type { Country } from '../../types';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const SideMenu = () => {
  const isOpen = useSelector(selectSidePanel);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState(counties);

  const handleClose = () => {
    dispatch(toggleSidePanel());
  };

  useEffect(() => {
    const filteredCountries = counties.filter(
      (country: Country) =>
        country.name.toLowerCase().includes(filter) || country.code.toLowerCase().includes(filter)
    );
    setCountries(filteredCountries);
  }, [filter]);

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
      <TextField
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
            <SideMenuItem key={countries.code} country={countries} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
