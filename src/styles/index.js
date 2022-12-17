import {createTheme} from '@mui/material/styles';
import {lighten} from '@mui/material';

export const Colors = {
  primary: '#00adb5',
  secondary: '#00c7c0',
  success: '#4caf50',
  info: '#00d5ff',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#22414d',
  light: '#aaa',
  muted: '#abafb3',
  border: '#DDDFE1',
  inverse: '#2F3D4A',
  shaft: '#333',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  white: '#fff',
  black: '#000',
};

// TODO: define overrides object to create theme
const overrides = createTheme({
  // ! Palette should be overriden (customized) at theme level.
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  // ! At least one component should be overriden (customized) at theme level.
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          background: Colors.dark,
          color: lighten(Colors.secondary, 0.9),
          borderRadius: '0 10px 10px 0',
          borderRight: `1px solid ${Colors.secondary}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(Colors.secondary, 0.7),
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          width: '100%',
          boxShadow: 'none',
          background: Colors.dark,
          color: lighten(Colors.secondary, 0.9)
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        expandIconWrapper: {
          color: lighten(Colors.secondary, 0.9),
        },
      },
    },
  },
});

// TODO: use overrides object to create theme
const theme = createTheme({
  palette: {
    primary: {
      main: overrides.palette.primary.main,
    },
    secondary: {
      main: overrides.palette.secondary.main,
    },
  },
  components: {
    MuiDrawer: overrides.components.MuiDrawer,
    MuiDivider: overrides.components.MuiDivider,
    MuiAccordion: overrides.components.MuiAccordion,
    MuiAccordionSummary: overrides.components.MuiAccordionSummary,
    MuiAccordionDetails: overrides.components.MuiAccordionDetails,
  },
});

export {overrides};
export default theme;
