import { useCallback } from 'react';
import { setArticlePopupArticle, setArticlePopupState } from '../features/articlePopupSlice';
import { Article } from '../types';
import { useAppDispatch } from '../app/hooks';

export const useArticlePopup = () => {
  const dispatch = useAppDispatch();
  const handleClick = useCallback(
    (article: Article) => {
      dispatch(setArticlePopupState(true));
      dispatch(setArticlePopupArticle(article));
    },
    [dispatch]
  );
  return handleClick;
};
