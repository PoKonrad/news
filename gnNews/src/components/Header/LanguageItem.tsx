import { Check } from '@mui/icons-material';
import { MenuItem, ListItemIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage, setLanguage } from '../../features/localizationSlice';

interface LanguageItemProps {
  language: string;
  fullLanguage: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ language, fullLanguage }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);

  const handleClick = () => {
    i18n.changeLanguage(language);
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
