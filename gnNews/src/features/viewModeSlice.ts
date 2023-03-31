import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export const viewModeSlice = createSlice({
  name: 'viewMode',
  initialState: {
    viewMode: 'list'
  },
  reducers: {
    setViewMode: (state, action) => {
      state.viewMode = action.payload.newMode;
    }
  }
});

export const selectViewMode = (state: RootState) => state.viewMode;
export const { setViewMode } = viewModeSlice.actions;
export default viewModeSlice.reducer;
