import { styled, Link } from '@mui/material';

const FooterLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  height: '32px',
  width: '32px',
  marginRight: '8px',
  marginLeft: '8px',
  backgroundColor: '#314951',
  borderRadius: '32px',

  padding: theme.spacing(0, 2),
  transition: theme.transitions.create('color'),

  ':hover': {
    color: theme.palette.primary.main,

  },
}));

export default FooterLink;
