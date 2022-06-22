import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
} from '@mui/material';
import CartPageItemGrid from './cart-page-item-grid';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectCartItemsCount, selectCartJoinedItems } from '../../store/features/cart/cart-selectors';
import { cartFetchItemsActionThunk } from '../../store/action-creators';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useRootDispatch();
  const itemsCount = useRootSelector(selectCartItemsCount);
  const cart = useRootSelector(selectCartJoinedItems);

  useEffect(() => {
    dispatch(cartFetchItemsActionThunk);
  }, [cart]);

  return (
    <Box sx={{ px: 30, background: '#e5f3fb', pb: 60 }}>

      <Typography textAlign="center" component="h1" variant="h3" sx={{ pt: 5, mb: 10 }}>Shopping Cart</Typography>
      {itemsCount > 0 ? <CartPageItemGrid /> : (
        <>
          <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>No items</Typography>
          <Button variant="outlined" sx={{ borderRadius: 1 }} onClick={() => navigate('/')}>Back to pricing</Button>
        </>
      )}
    </Box>
  );
};

export default CartPage;
