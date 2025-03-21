import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const WarningDialog = ({ open, onClose }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="warning-dialog-title"
      aria-describedby="warning-dialog-description"
    >
      <DialogTitle id="warning-dialog-title">{'Action Required'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="warning-dialog-description">
          You have pending changes. Please click the Apply button before saving to local storage.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};
