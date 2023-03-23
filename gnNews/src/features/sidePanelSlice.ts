import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export const sidePanelSlice = createSlice({
  name: 'sidePanel',
  initialState: {
    sidePanelOpen: false
  },
  reducers: {
    toggleSidePanel: (state) => {
      state.sidePanelOpen = !state.sidePanelOpen;
    }
  }
});

export const { toggleSidePanel } = sidePanelSlice.actions;
export const selectSidePanel = (state: RootState) => state.sidePanel;
