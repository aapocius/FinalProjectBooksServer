import React from 'react';
import {
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartItemPopulated } from '../../../types';
import Img from '../../../components/img';
import NumberField from '../../../components/number-field';
import { useRootDispatch } from '../../../store/hooks';
import { createCartDeleteActionThunk } from '../../../store/action-creators';

type CartPageItemGridProductProps = CartItemPopulated;

const CartPageItemGridProduct: React.FC<CartPageItemGridProductProps> = ({

  id,
  product,
  amount,
}) => {
  const dispatch = useRootDispatch();
  const onDelete = (cartItemId: string) => {
    dispatch(createCartDeleteActionThunk(cartItemId));
  };

  return (
    <Grid container columnSpacing={5}>
      <Grid item xs={3} sx={{ display: 'flex', gap: 1 }}>
        <Img
          src={product.img[0]}
          alt=""
          sx={{ width: 100, height: 120 }}
        />
      </Grid>
      <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6">{`${product.price} $`}</Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
        <NumberField
          buttonsSx={{ width: 30 }}
          value={amount}
          sx={{

            width: '35%',
          }}
        />
      </Grid>
      <Grid item xs={3} sx={{ ml: 10, display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6">{`${product.price * amount} $`}</Typography>
      </Grid>
      <Grid item xs={1} sx={{ ml: -15, display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => onDelete(id)} size="large">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartPageItemGridProduct;
