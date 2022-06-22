import React from 'react';
import {
  Typography, Box, Container, Button,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ConversationsLogo from '../../components/svg-logos/Conversations-logo';
import SignalsLogo from '../../components/svg-logos/signals-logo';
// import loggg from '../../components/meskinas.png';

const ProductHoverFn: React.FC = () => (

  <Container
    sx={{
      p: 3,
      borderRadius: 5,
      mt: 1,
      display: 'grid',
      placeItems: 'left',
      flexDirection: 'column',
      justifyContent: 'center',

      // bgcolor: (theme) => ({
      //   bgcolor: theme.palette.primary.main,
      // }),

      gap: 2,

    }}
  >

    <Box sx={{
      display: 'flex', alignItems: 'top', gap: '20px', padding: '10px',
    }}
    >
      <Box sx={{
        display: 'flex', justifyContent: 'center', borderRadius: '30%', alignItems: 'center', width: '40px', height: '40px', background: 'linear-gradient(to right bottom, #63d0f6, #2fa9e4, #0582cd, #1f5ab0, #372f8b)',
      }}
      >
        <ConversationsLogo size={25} />
      </Box>
      <Box sx={{ width: 450, textAlign: 'left' }}>
        {' '}
        <Box display="flex" alignItems="center">

          <Button
            sx={{
              color: 'black',
              fontSize: '17px',
            }}
          >
            Qualified Conversations

          </Button>
          <Typography sx={{
            color: 'white',
            '&:hover': {
              color: 'primary.main',
              transform: 'revert',
            },
          }}
          >
            <ArrowRightAltIcon />

          </Typography>
        </Box>

        <Typography fontSize="13px">The next-generation conversational sales and marketing platform. Connect with valuable buyers in real time, right on your website.</Typography>

      </Box>
    </Box>

    <Box sx={{
      display: 'flex', alignItems: 'top', gap: '20px', padding: '10px',
    }}
    >
      <Box sx={{
        display: 'flex', justifyContent: 'center', borderRadius: '30%', alignItems: 'center', width: '40px', height: '40px', background: 'linear-gradient(to left bottom, #c33e30, #d7517e, #392251, #355381);',
      }}
      >
        <SignalsLogo size={25} />
      </Box>
      <Box sx={{ width: 450, textAlign: 'left' }}>
        {' '}
        <Typography fontSize="20px" paddingBottom="10px" component="h1" variant="h5">Qualified Signals</Typography>
        <Typography fontSize="13px">Account-based sales intelligence unlike anything before. Focus your sellers on accounts with high buying intent so they can maximize pipeline.</Typography>

      </Box>
    </Box>

    <Box sx={{
      display: 'flex', alignItems: 'top', gap: '20px', padding: '10px',
    }}
    >
      <Box sx={{
        display: 'flex', justifyContent: 'center', borderRadius: '30%', alignItems: 'center', width: '40px', height: '40px', background: 'linear-gradient(to right bottom, #33a3ca, #1f87a3, #106c7f, #07525d, #04393e);',
      }}
      >
        <VerifiedIcon fontSize="medium" sx={{ color: 'white' }} />
      </Box>
      <Box sx={{ width: 450, textAlign: 'left' }}>
        {' '}
        <Typography fontSize="20px" paddingBottom="10px" component="h1" variant="h5">Quality Integrations</Typography>
        <Typography fontSize="13px">The Qualified platform connects right into your technology stack so you can deliver a world-class Conversational Marketing program.</Typography>

      </Box>
    </Box>
    {/* <Box>
        <img src="../components/meskinas.png" alt="meskinas" />
      </Box> */}

  </Container>
);

export default ProductHoverFn;
