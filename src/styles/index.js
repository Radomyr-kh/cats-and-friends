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
const overrides = {};

// TODO: use overrides object to create theme
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          background: Colors.dark,
          color: lighten(Colors.secondary, 0.9),
          borderRadius: '0 10px 10px 0',
          borderRight: `1px solid ${Colors.secondary}`
        }
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(Colors.secondary, 0.7),
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          background: Colors.dark,
          color: lighten(Colors.secondary, 0.9),
          '&.MuiAccordion-root:before': {
            height: 0
          }
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: 0
        },
        content: {
          margin: 0,
          '&.Mui-expanded': {
            'margin': 0
          }
        },
        expandIconWrapper: {
          color: lighten(Colors.secondary, 0.9)
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0 32px 0'
        }
      }
    }
  },
});

export {overrides};
export default theme;
