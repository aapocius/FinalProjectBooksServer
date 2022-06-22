import React from 'react';
import {
  Container,
  Box,
  Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FooterLink from './footer-link';

const Footer: React.FC = () => (
  <Box sx={{
    textAlign: 'center',
    pt: 1,
    width: '100%',
    bottom: '0',
    overflow: 'hidden',
    background: '#e5f3fb',

  }}
  >
    <Container sx={{ px: { xs: 0, sm: 0 }, py: { xs: 1, sm: 0 } }}>
      <Box sx={(theme) => theme.mixins.navbar}>
        <Box>
          <FooterLink href="https://www.facebook.com/" target="_blank"><FacebookIcon /></FooterLink>
          <FooterLink href="https://www.instagram.com/" target="_blank"><InstagramIcon /></FooterLink>
          <FooterLink href="https://www.twitter.com/" target="_blank"><TwitterIcon /></FooterLink>
          <FooterLink href="https://youtu.be/dQw4w9WgXcQ" target="_blank"><YouTubeIcon /></FooterLink>
        </Box>
        <Box sx={{ color: 'white' }}>
          <Typography variant="caption">
            BooksShop by Andrius Pocius &reg;
            {new Date().getFullYear()}
          </Typography>
        </Box>
        <Box>
          <FooterLink href="#">Contacts</FooterLink>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Footer;
