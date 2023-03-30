import { Check } from '@mui/icons-material';
import { MenuItem, ListItemIcon } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage, setLanguage } from '../../features/localizationSlice';

interface LanguageItemProps {
  language: string;
  fullLanguage: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ language, fullLanguage }) => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);

  const handleClick = () => {
    dispatch(
      setLanguage({
        language: language,
        fullLanguage: fullLanguage
      })
    );
  };
  return (
    <MenuItem onClick={handleClick}>
      <ListItemIcon>{language === currentLanguage.language ? <Check /> : null}</ListItemIcon>
      {fullLanguage}
    </MenuItem>
  );
};

export default LanguageItem;
