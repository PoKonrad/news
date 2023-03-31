import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

export const infoDialogSlice = createSlice({
  name: 'infoDialog',
  initialState: {
    open: false
  },
  reducers: {
    setInfoDialogState: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    }
  }
});

export const { setInfoDialogState } = infoDialogSlice.actions;
export const selectInfoDialog = (state: RootState) => state.infoDialog.open;
export default infoDialogSlice.reducer;
