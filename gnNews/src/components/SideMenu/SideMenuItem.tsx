import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCountry, setSelectedCountry } from '../../features/selectedContrySlice';
import type { Country } from '../../types';

interface SideMenuItemProps {
  country: Country;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({ country }) => {
  const currentCountry = useSelector(selectedCountry);
  const dispatch = useDispatch();

  const handleListItemButtonClick = () => {
    dispatch(setSelectedCountry(country));
  };

  return (
    <ListItem key={country.code}>
      <ListItemButton
        onClick={handleListItemButtonClick}
        selected={currentCountry === country}
        data-testid="ListItemButton">
        <ListItemIcon></ListItemIcon>
        <ListItemText>{country.name}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default SideMenuItem;
