import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { selectArticlePopup, setArticlePopupState } from '../features/articlePopupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Grid, Link, Typography } from '@mui/material';

export default function ArticleDialog() {
  const [open, setOpen] = React.useState(true);

  const article = useSelector(selectArticlePopup);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setArticlePopupState(false));
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  if (!article.isOpen) {
    return null;
  }

  return (
    <div>
      <Dialog
        maxWidth="md"
        open={article.isOpen}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
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
              {article.article.author ? article.article.author : 'Unknown Author'}
            </Typography>
          </Grid>
          <Grid item flexWrap="wrap" textOverflow="clip">
            <Link href={article.article.url}>
              <Typography variant="overline" fontSize="0.5rem">
                {new URL(article.article.url).hostname}
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <DialogTitle id="scroll-dialog-title">{article.article.title}</DialogTitle>
        <DialogContent dividers>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}>
            {article.article.content
              ? article.article.content.slice(0, 200)
              : article.article.description}
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
