import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Country } from '../types';

export const selectedCountrySlice = createSlice({
  name: 'selectedCountry',
  initialState: {
    value: {
      code: 'us',
      name: 'United States'
    }
  },
  reducers: {
    setSelectedCountry: (state, action: PayloadAction<Country>) => {
      state.value = action.payload;
    }
  }
});

export const { setSelectedCountry } = selectedCountrySlice.actions;
export const selectedCountry = (state: any) => state.selectedCountry.value;
