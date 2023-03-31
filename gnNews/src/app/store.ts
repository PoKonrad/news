import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import articlePopupSlice from '../features/articlePopupSlice';
import infoDialogSlice from '../features/infoDialogSlice';
import localizationSlice from '../features/localizationSlice';
import { newsApi } from '../features/newsApi';
import selectedCountrySlice from '../features/selectedContrySlice';
import sidePanelSlice from '../features/sidePanelSlice';
import viewModeSlice from '../features/viewModeSlice';

export const rootReducer = combineReducers({
  viewMode: viewModeSlice,
  sidePanel: sidePanelSlice,
  selectedCountry: selectedCountrySlice,
  newsApi: newsApi.reducer,
  infoDialog: infoDialogSlice,
  localization: localizationSlice,
  articlePopup: articlePopupSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(newsApi.middleware);
  }
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
