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
    <ListItem key={country.code} data-testid="side-menu-item">
      <ListItemButton
        onClick={handleListItemButtonClick}
        selected={currentCountry === country}
        data-testid="list-item-button">
        <ListItemIcon>
          <img width={20} src={`/flags/4x3/${country.code.toLowerCase()}.svg`} alt={country.name} />
        </ListItemIcon>
        <ListItemText>{country.name}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default SideMenuItem;
