import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface LocalizationState {
  language: string;
  fullLanguage: string;
}

export const localizationSlice = createSlice({
  name: 'localization',
  initialState: {
    language: 'en',
    fullLanguage: 'English'
  },
  reducers: {
    setLanguage: (state, action: PayloadAction<LocalizationState>) => {
      state.language = action.payload.language;
      state.fullLanguage = action.payload.fullLanguage;
    }
  }
});

export const { setLanguage } = localizationSlice.actions;
export const selectLanguage = (state: RootState) => state.localization;
