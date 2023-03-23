import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { selectedCountrySlice } from '../features/selectedContrySlice';
import { sidePanelSlice } from '../features/sidePanelSlice';
import { viewModeSlice } from '../features/viewModeSlice';

export const rootReducer = combineReducers({
  viewMode: viewModeSlice.reducer,
  sidePanel: sidePanelSlice.reducer,
  selectedCountry: selectedCountrySlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
