import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { selectInfoDialog, setInfoDialogState } from '../features/infoDialogSlice';

export default function AlertDialog() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setInfoDialogState(false));
  };

  const isOpen = useSelector(selectInfoDialog);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Info</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This is a simple app to display news from various sources. It is a work in progress.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
