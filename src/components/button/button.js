import * as React from 'react';
import Button from '@mui/material/Button';

export default function ContainedButtons({ children, click }) {
  return (
    <Button onClick={click} variant="contained" color="success">
      {children}
    </Button>
  );
}
