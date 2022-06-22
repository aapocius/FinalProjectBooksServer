import React, { useEffect } from 'react';
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
  Alert,
} from '@mui/material';

import { useSearchParams } from 'react-router-dom';
import { useRootSelector, useRootDispatch } from '../../store/hooks';
import { selectShopError, selectShopProducts, selectShopLoading } from '../../store/selectors';
import { shopClearErrorAction, shopFetchProductsActionThunk } from '../../store/action-creators';
import ShopPageCard from './shop-page-card';
import Questions from './questions-section';
import Customers from '../customers/index';
import { shopFetchCategoriesActionThunk, createShopChangeCategoryFilterActionThunk } from '../../store/features/shop/shop-action-creators';

const ShopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const products = useRootSelector(selectShopProducts);
  const loading = useRootSelector(selectShopLoading);
  const error = useRootSelector(selectShopError);
  const dispatch = useRootDispatch();

  useEffect(() => {
    const categoryId = searchParams.get('categoryId');

    const shopProductFetchAction = categoryId
      ? createShopChangeCategoryFilterActionThunk(categoryId)
      : shopFetchProductsActionThunk;
    dispatch(shopFetchCategoriesActionThunk);

    dispatch(shopProductFetchAction);

    return () => {
      dispatch(createShopChangeCategoryFilterActionThunk(null, true));
    };
  }, []);

  let pageContent = (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="primary" size={60} />
    </Box>
  );

  if (!loading) {
    pageContent = products.length > 0 ? (
      <Grid container spacing={30}>
        {products.map((item) => (
          <Grid item key={item.id} lg={6} sm={8} xs={10}>
            <ShopPageCard {...item} />
          </Grid>
        ))}
      </Grid>
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>No items, sorry.</Typography>;
  }

  return (
    <Box sx={{ background: '#e5f3fb' }}>
      <Container>
        <Customers />
        {error && (
        <Alert color="error" onClose={() => dispatch(shopClearErrorAction)}>{error}</Alert>
        )}
        {pageContent}
        <Questions />
      </Container>
    </Box>
  );
};

export default ShopPage;
