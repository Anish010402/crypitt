import { Snackbar } from '@mui/material'
import React from 'react'
import { CryptoState } from '../CryptoContext'
import MuiAlert  from '@mui/lab/Alert';

const Alert = () => {
 
  const { alert,setAlert } = CryptoState()

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <MuiAlert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  )
}

export default Alert
