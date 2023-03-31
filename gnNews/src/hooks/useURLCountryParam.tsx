import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { setSelectedCountry } from '../features/selectedContrySlice';
import countryList from '../assets/countries.json';
import { selectedCountry } from '../features/selectedContrySlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export const useURLCountryParam = () => {
  const dispatch = useAppDispatch();
  const currentCountry = useAppSelector(selectedCountry);
  const navigate = useNavigate();
  const { countryName } = useParams();

  useEffect(() => {
    navigate(`/country/${currentCountry.name.toLowerCase()}`);
  }, [currentCountry]);

  useEffect(() => {
    if (countryName) {
      let countryCode = countryList.find(
        (x) => x.name.toLowerCase() === countryName.toLowerCase()
      )?.code;
      dispatch(
        setSelectedCountry({
          name: countryName,
          code: countryCode || ''
        })
      );
    }
  }, []);
};
