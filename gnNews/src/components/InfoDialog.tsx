import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { selectInfoDialog, setInfoDialogState } from '../features/infoDialogSlice';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../app/hooks';

export default function AlertDialog() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleClose = () => {
    dispatch(setInfoDialogState(false));
  };

  const isOpen = useAppSelector(selectInfoDialog);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{t('info')}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t('info-text')}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('close')}</Button>
      </DialogActions>
    </Dialog>
  );
}
