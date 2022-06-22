import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { useRootSelector, useRootDispatch } from './store/hooks';
import { selectAuthLoading, selectAuthLoggedIn, selectAuthToken } from './store/selectors';
import { cartFetchItemsActionThunk, createAuthenticateActionThunk } from './store/action-creators';

// all
import ShopPage from './pages/shop-page';
import CartPage from './pages/cart-page';
import Product from './pages/product';
import Customers from './pages/customers';
// visitor
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
// auth
import ProfilePage from './pages/profile-page';

import VisitorLayout from './layouts/visitor-layout';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

const App: React.FC = () => {
  const location = useLocation();
  const token = useRootSelector(selectAuthToken);
  const loggedIn = useRootSelector(selectAuthLoggedIn);
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();

  useEffect(() => {
    if (loggedIn) {
      dispatch(cartFetchItemsActionThunk);
    }
  }, [loggedIn]);

  if (!loggedIn && token) {
    if (!loading) {
      dispatch(createAuthenticateActionThunk(token, location.pathname));
    }
    return <div />;
  }

  return (
    <Routes>
      <Route path="/" element={<VisitorLayout />}>
        <Route index element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="products" element={<Product />} />
        <Route path="customers" element={<Customers />} />

        <Route
          path="auth/login"
          element={(
            <RequireVisitor>
              <LoginPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="auth/register"
          element={(
            <RequireVisitor>
              <RegisterPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="profile"
          element={(
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          )}
        />
      </Route>
    </Routes>
  );
};

export default App;
