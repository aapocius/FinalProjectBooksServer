import React, { useEffect } from 'react';
import {
  AppBar,
  Badge,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import NavbarLink from './navbar-link';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarVisitorMenu from './navbar-visitor-menu';
import { useRootDispatch, useRootSelector } from '../../store/hooks';
import { selectAuthLoggedIn, selectCartItemsCount } from '../../store/selectors';
import { cartFetchItemsActionThunk } from '../../store/features/cart/cart-action-creators';
import { selectCartJoinedItems } from '../../store/features/cart/cart-selectors';

const Navbar: React.FC = () => {
  const loggedIn = useRootSelector(selectAuthLoggedIn);
  const cartItemsCount = useRootSelector(selectCartItemsCount);
  const dispatch = useRootDispatch();
  const itemAddedToCart = useRootSelector(selectCartJoinedItems);

  useEffect(() => {
    dispatch(cartFetchItemsActionThunk);
  }, [itemAddedToCart]);

  return (
    <AppBar position="sticky" sx={{ userSelect: 'none', bgcolor: 'grey.900' }}>
      <Container sx={{ px: { xs: 0, sm: 0 } }}>
        <Toolbar sx={{
          px: { xs: 0, sm: 0 },
          justifyContent: {
            lg: 'space-between', sm: 'space-between', md: 'space-between', xs: 'flex-end',
          },
        }}
        >
          <Typography display="flex" alignItems="center" component="h1" variant="h5">
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
            <Typography ml="30px">
              <NavbarLink to="/">Home</NavbarLink>
            </Typography>
          </Typography>
          <Box sx={{ alignSelf: 'stretch' }} />
          <Box sx={{ fontSize: 13, pl: 30 }} />
          {/* <Typography>
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Typography> */}
          <Box>
            <NavbarLink to="/cart">
              <Badge badgeContent={cartItemsCount} color="error">
                <ShoppingBagIcon sx={{ fontSize: 30 }} />
              </Badge>
            </NavbarLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
