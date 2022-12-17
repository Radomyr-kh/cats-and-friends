import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export default function Header() {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    matchesMobile ? (
      <HeaderMobile matchesMobile={matchesMobile} />
    ) : (
      <HeaderDesktop matchesMobile={matchesMobile} />
    )
  );
}
