import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmDialog = ({ open, onClose, onConfirm }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Clear Storage Confirmation'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to clear all stored data? This action cannot be undone and will reload the page.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error" autoFocus>
          Clear Storage
        </Button>
      </DialogActions>
    </Dialog>
  );
};
