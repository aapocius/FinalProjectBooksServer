import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import theme from '../../styles/theme';

const Questions: React.FC = () => (
  <Container sx={{
    textAlign: 'center', pb: 10, mt: 30,
  }}
  >
    <Typography component="h3" variant="h5" sx={{ mt: 5, fontWeight: 600 }}>
      Questions? We’ll put you on the right path.
    </Typography>

    <Box display="flex" justifyContent="center" sx={{ m: 2, pt: 3 }}>

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
        Chat with an expert
      </Button>

      <Button
        sx={{
          m: 1, height: 50, borderRadius: 1, ':hover': { bgcolor: `${theme.palette.primary.main}`, color: 'white' },
        }}
        variant="outlined"
      >
        compare all books
      </Button>

    </Box>

  </Container>
);
export default Questions;
