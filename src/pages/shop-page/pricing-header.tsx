import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import theme from '../../styles/theme';

const PricingHeader: React.FC = () => (
  <Container sx={{ textAlign: 'center', mb: 5 }}>
    <Typography component="h2" variant="subtitle1" sx={{ mt: 2, lineHeight: 1.3 }}>
      Get instant access to millions of eBooks, audiobooks,
      {' '}
      <br />
      {' '}
      magazines, and more for only $10,99/month.
    </Typography>

    <Box display="flex" justifyContent="center" sx={{ m: 2, mb: 15 }}>

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
export default PricingHeader;
