import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { setSelectedCountry } from '../features/selectedContrySlice';
import countryList from '../assets/countries.json';
import { selectedCountry } from '../features/selectedContrySlice';

export const useURLCountryParam = () => {
  const dispatch = useDispatch();
  const currentCountry = useSelector(selectedCountry);
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
