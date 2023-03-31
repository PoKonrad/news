import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Country } from '../types';
import { RootState } from '../app/store';

export const selectedCountrySlice = createSlice({
  name: 'selectedCountry',
  initialState: {
    value: {
      code: 'pl',
      name: 'Poland'
    }
  },
  reducers: {
    setSelectedCountry: (state, action: PayloadAction<Country>) => {
      state.value = action.payload;
    }
  }
});

export const { setSelectedCountry } = selectedCountrySlice.actions;
export const selectedCountry = (state: RootState) => state.selectedCountry.value;
export default selectedCountrySlice.reducer;
