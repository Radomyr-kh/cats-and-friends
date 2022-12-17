import { IconButton } from '@mui/material';
import { HeaderContainer, Logo } from '../../styles/header';
import MenuIcon from '@mui/icons-material/Menu';
import ActionIcons from '../ActionIcons';
import { useUIContext } from '../../context/ui';

export default function HeaderMobile({ matchesMobile }) {
  const { setDrawerOpen } = useUIContext();

  return (
    <HeaderContainer>
      <IconButton
        sx={{ height: 40 }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Logo textAlign={'center'}>
        Cats & friends
      </Logo>
      <ActionIcons matchesMobile={matchesMobile} />
    </HeaderContainer>
  );
}
