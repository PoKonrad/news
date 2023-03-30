import { UseQueryHookResult } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { useSelector } from 'react-redux';
import { useGetNewsByCountryQuery } from '../features/newsApi';
import { selectedCountry } from '../features/selectedContrySlice';
import type { Country, News } from '../types';

export const useGetNewsForCountry = () => {
  const country = useSelector(selectedCountry) as Country;
  return useGetNewsByCountryQuery(country.code);
};
