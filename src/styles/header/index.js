import { Typography, List } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Colors } from '..';
import '@fontsource/allison';

export const HeaderContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: '4px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px 8px',
  boxShadow: `0 6px 4px -4px ${Colors.muted}`
}));

export const Logo = styled(Typography)(() => ({
  padding: '4px',
  flexGrow: 1,
  fontSize: '4em',
  fontFamily: 'Allison',
  color: Colors.secondary
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === 'row' ? 'flex' : 'block',
  flexGrow: 3,
  justifyContent: 'center',
  alignItems: 'center',
  textTransform: 'upperCase'
}));

export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: Colors.shaft,
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  alignContent: 'center',
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`
}));

export const ActionIconsContainerDesktop = styled(Box)(() => ({

}));
