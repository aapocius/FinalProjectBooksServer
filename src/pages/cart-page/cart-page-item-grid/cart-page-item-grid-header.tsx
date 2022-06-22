import React from 'react';
import {
  Typography,
  Grid,
} from '@mui/material';

const CartPageItemGridHeader: React.FC = () => (
  <Grid container sx={{ pl: 2, mb: 2 }} columnSpacing={5}>
    <Grid item xs={3}>
      <Typography variant="h6">Product</Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h5">Price</Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h6" sx={{ pl: 3 }}>Amount</Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h6">Total</Typography>
    </Grid>
  </Grid>
);

export default CartPageItemGridHeader;
