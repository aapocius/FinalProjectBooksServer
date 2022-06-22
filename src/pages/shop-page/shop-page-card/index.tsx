import React from 'react';
import {
  Box,

  Typography, Container,
  Button,
} from '@mui/material';

import { ProductPopulated } from '../../../types';
import Img from '../../../components/img';

import ShopPageCardActions from './shop-page-card-actions';
import { useRootSelector } from '../../../store/hooks';
import { selectAuthLoggedIn } from '../../../store/features/auth/auth-selectors';

type ShopPageCardProps = ProductPopulated;

const ShopPageCard: React.FC<ShopPageCardProps> = ({
  id,
  // title,
  img,
  info,
  about,
  price,

}) => {
  const loggedIn = useRootSelector(selectAuthLoggedIn);

  // const itemProperties = [
  //   { name: 'Pavadinimas', value: title },
  //   { name: 'Kaina', value: `${price}€` },
  //   { name: 'Kategorijos', value: categories.join(', ') },
  // ];

  return (
    <Container>
      <Box
        sx={{
          display: { xs: 'block', sm: 'flex', lg: 'flex' },
          flexDirection: { lg: 'row' },
          height: { sm: 450, lg: '100%', xs: 600 },
          maxWidth: { sm: 530 },
          width: { xs: 'auto' },
          mx: {
            sm: 40, lg: 'auto',
          },
          justifyContent: 'center',
          mr: { xs: -9 },

        }}
      >
        <Box
          sx={{
            height: { xs: 370, sm: '100%', lg: '100%' },
            width: { xs: '100%', sm: 300, lg: '100%' },
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mr: { lg: -7 },

          }}
        >
          <Img src={img[0]} sx={{ height: { lg: '88%', xs: '110%' }, width: '95%' }} alt="" />
          {/* sx={{ width: { lg: '1000px', sm: '200px' } }} */}

        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 3,

        }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            pb: 1,
            alignItems: 'center',
          }}
          >
            {/* <Typography>{`${title}`}</Typography> */}
            <Typography variant="h5">{`${info}`}</Typography>
            <Typography>{`${about}`}</Typography>
            <Button variant="outlined" color="primary" sx={{ borderRadius: 1, width: 200, mt: 1 }}>TAKE ME TO THE BOOK</Button>
          </Box>
          <Box>
            <Typography fontSize="20px" variant="subtitle2" textAlign="center">
              {`Price: $${price}`}
            </Typography>
            <Box sx={{
              display: 'flex', justifyContent: 'center', flexDirection: 'column',
            }}
            >
              {/* <ShopPageCardProperties properties={itemProperties} /> */}
              {/* <ShopPageCardActions
                id={id}
                inStock={amount}
              /> */}
              { loggedIn && <ShopPageCardActions id={id} />}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ShopPageCard;
