import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setArticlePopupArticle, setArticlePopupState } from '../features/articlePopupSlice';
import { Article } from '../types';

export const useArticlePopup = () => {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (article: Article) => {
      dispatch(setArticlePopupState(true));
      dispatch(setArticlePopupArticle(article));
    },
    [dispatch]
  );
  return handleClick;
};
