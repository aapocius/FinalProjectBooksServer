import { createTheme, PaletteColor } from '@mui/material';

const defaultTheme = createTheme();

const createColor = (color: string): PaletteColor => defaultTheme.palette.augmentColor({ color: { main: color } });

const theme = createTheme({
  palette: {
    primary: createColor('#49b6cb'),
    secondary: createColor('#FFFFFF'),
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: '\'-apple-system\',\'BlinkMacSystemFont\'',
  },
  mixins: {
    navbar: {
      height: 56,
    },
  },
});

export default theme;
