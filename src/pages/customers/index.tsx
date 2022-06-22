import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TyperEf from './typing-efect';
import theme from '../../styles/theme';

const Customers: React.FC = () => (

  <Container sx={{
    py: 6, pt: 5, textAlign: 'center',
  }}
  >
    <Typography
      sx={{
        height: {
          lg: 100, md: 100, sm: 100, xs: 250,
        },
      }}
      component="h1"
      variant="h3"
    >
      <Box>
        <Typography component="span"><TyperEf title="Enjoy popular" dataText={['books', 'eBooks', 'audioBooks']} /></Typography>
      </Box>
      when you subscribe
    </Typography>
    <Typography component="h2" variant="subtitle1" sx={{ mt: 2, lineHeight: 1.3 }}>
      Get instant access to millions of eBooks, audiobooks,
      {' '}
      <br />
      {' '}
      magazines, and more for only $10,99/month.
    </Typography>

    <Box display="flex" justifyContent="center" sx={{ m: 2, mb: 10 }}>

      <Button
        size="large"
        sx={{
          color: theme.palette.secondary.main,
          m: 1,
          height: 50,
          borderRadius: 1,
          ':hover': { bgcolor: theme.palette.primary.main },
        }}
        variant="contained"
      >
        Read free for 14 days
      </Button>
      <Button
        sx={{
          m: 1,
          height: 50,
          borderRadius: 1,
          ':hover': { bgcolor: theme.palette.primary.main, color: theme.palette.secondary.main },
        }}
        variant="outlined"
        startIcon={<PlayArrowIcon />}
      >
        see a Demo
      </Button>
    </Box>
  </Container>

);

export default Customers;
