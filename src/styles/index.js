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

    // ? should we change the whole palette?

    success: {main: Colors.success},
    info: {main: Colors.info},
    danger: {main: Colors.danger},
    warning: {main: Colors.warning},
    dark: {main: Colors.dark},
    light: {main: Colors.light},
    muted: {main: Colors.muted},
    border: {main: Colors.border},
    inverse: {main: Colors.inverse},
    shaft: {main: Colors.shaft},
    dove_gray: {main: Colors.dove_gray},
    body_bg: {main: Colors.body_bg},
    white: {main: Colors.white},
    black: {main: Colors.black},
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
          boxShadow: 'none',
          background: Colors.dark,
          color: lighten(Colors.secondary, 0.9),
          '&.MuiAccordion-root:before': {
            height: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
        },
        content: {
          margin: 0,
          '&.Mui-expanded': {
            margin: 0,
          },
        },
        expandIconWrapper: {
          color: lighten(Colors.secondary, 0.9),
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 32px 0',
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
