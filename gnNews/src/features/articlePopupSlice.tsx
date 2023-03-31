import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import type { Article } from '../types';

interface ArticlePopupState {
  isOpen: boolean;
  article: Article;
}

export const articlePopupSlice = createSlice({
  name: 'articlePopup',
  initialState: {
    isOpen: false,
    article: {}
  } as ArticlePopupState,
  reducers: {
    setArticlePopupState: (state, action) => {
      state.isOpen = action.payload;
    },
    setArticlePopupArticle: (state, action) => {
      state.article = action.payload;
    }
  }
});

export const { setArticlePopupState } = articlePopupSlice.actions;

export const { setArticlePopupArticle } = articlePopupSlice.actions;

export const selectArticlePopup = (state: RootState) => state.articlePopup;

export default articlePopupSlice.reducer;
