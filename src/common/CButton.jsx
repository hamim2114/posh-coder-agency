import React from 'react'
import { Button, CircularProgress } from '@mui/material';

const CButton = ({ variant, onClick, children, isLoading }) => {
  return (
    <Button
      loading
      variant={variant}
      onClick={onClick}
      disabled={isLoading}
      sx={{
        textTransform: 'none'
      }}
    >
      {isLoading ? <CircularProgress sx={{ color: '#fff' }} size={24} /> : children}
    </Button>
  )
}

export default CButton