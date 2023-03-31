import { useEffect, useState } from 'react';
import countryList from '../assets/countries.json';
import type { Country } from '../types';

export const useFilter = (countriesInput: Country[]) => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState(countriesInput);

  useEffect(() => {
    const filteredCountries = countryList.filter(
      (country: Country) =>
        country.name.toLowerCase().includes(filter) || country.code.toLowerCase().includes(filter)
    );
    setCountries(filteredCountries);
  }, [filter]);

  return { filter, setFilter, countries };
};
