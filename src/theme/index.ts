import { Theme, responsiveFontSizes } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';

import { light, dark } from './palette';

const getTheme = (): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: dark, // Always use the dark palette
      typography: {
        fontFamily: '"Inter", sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 'medium' as React.CSSProperties['fontWeight'],
        },
      },
    }),
  );

export default getTheme;