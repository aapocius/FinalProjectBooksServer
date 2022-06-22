import React from 'react';
import { Button, Typography } from '@mui/material';
import NavbarLink from './navbar-link';
import Logo from '../../components/logo';

const NavbarVisitorMenu: React.FC = () => (
  <Typography>
    <NavbarLink
      sx={{ mr: -3 }}
      to="/auth/login"
    >
      {/* <Button
        sx={{
          borderRadius: 1,
          border: '1px solid white',
          color: 'white',
          ':hover': { color: '#49b6cb' },
        }}
        variant="outlined"
      >
        Sign In
      </Button> */}
      <Logo size={40} />
    </NavbarLink>
    {/* <NavbarLink to="/auth/register">
      <Button
        sx={{
          borderRadius: 1,
          color: 'white',
          border: '1px solid white',
          ':hover': { color: '#49b6cb' },
        }}
        variant="outlined"
      >
        Register

      </Button>
    </NavbarLink> */}
  </Typography>
);

export default NavbarVisitorMenu;
