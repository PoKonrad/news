import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { newsApi } from '../features/newsApi';
import { selectedCountrySlice } from '../features/selectedContrySlice';
import { sidePanelSlice } from '../features/sidePanelSlice';
import { viewModeSlice } from '../features/viewModeSlice';

export const rootReducer = combineReducers({
  viewMode: viewModeSlice.reducer,
  sidePanel: sidePanelSlice.reducer,
  selectedCountry: selectedCountrySlice.reducer,
  newsApi: newsApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(newsApi.middleware);
  }
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
