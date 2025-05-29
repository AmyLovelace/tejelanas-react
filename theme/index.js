import { createTheme as createMuiTheme } from '@mui/material';
import { createPalette } from './create-palette';
import { createComponents } from './create-components';
import { createShadows } from './create-shadows';
import { createTypography } from './create-typography';

export function createTheme() {
  const palette = createPalette();
  const components = createComponents({ palette });
  const shadows = createShadows();
  const typography = createTypography();

  return createMuiTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 400,
        sm: 600,
        md: 900,
        mdx:1000,
        mdxl:1100,
        lg: 1200,
        xl: 1920,
        xxl: 2200
      }
    },
    components,
    palette,
    shadows,
    shape: {
      borderRadius: 8
    },
    typography
  });
}

export const listItemStyle = {
  alignItems: 'center',
  borderRadius: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  pl: '16px',
  pr: '16px',
  py: '6px',
  textAlign: 'left',
  width: '100%',
  color: 'white',
  fontSize: 14,
  fontWeight: 600,
  lineHeight: '24px',
  flexGrow: 1,
  fontFamily: (theme) => theme.typography.fontFamily,
  whiteSpace: 'nowrap'
}


