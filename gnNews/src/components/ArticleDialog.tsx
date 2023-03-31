import { selectArticlePopup, setArticlePopupState } from '../features/articlePopupSlice';
import {
  Divider,
  Grid,
  Link,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export default function ArticleDialog() {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  const articleData = useAppSelector(selectArticlePopup);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setArticlePopupState(false));
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  if (!articleData.isOpen) {
    return null;
  }

  return (
    <div>
      <Dialog maxWidth="md" open={articleData.isOpen} onClose={handleClose} scroll={'paper'}>
        <Grid
          container
          wrap="wrap"
          direction="column"
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            px: '1.8rem'
          }}>
          <Grid item flexWrap="wrap">
            <Typography variant="overline" fontSize="0.7rem">
              {articleData.article.author ? articleData.article.author : 'Unknown Author'}
            </Typography>
          </Grid>
          <Grid item flexWrap="wrap" textOverflow="clip">
            <Link href={articleData.article.url}>
              <Typography variant="overline" fontSize="0.5rem">
                {new URL(articleData.article.url).hostname}
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <DialogTitle id="scroll-dialog-title">{articleData.article.title}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}>
            {articleData.article.content
              ? articleData.article.content.slice(0, 200)
              : articleData.article.description}
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose}>{t('close')}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
