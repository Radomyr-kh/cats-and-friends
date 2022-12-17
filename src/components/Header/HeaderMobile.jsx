import { IconButton } from '@mui/material';
import { HeaderContainer, Logo } from '../../styles/header';
import MenuIcon from '@mui/icons-material/Menu';
import ActionIcons from '../ActionIcons';

export default function HeaderMobile({ matchesMobile }) {
  return (
    <HeaderContainer>
      <IconButton sx={{ height: 40 }}>
        <MenuIcon />
      </IconButton>
      <Logo textAlign={'center'}>
        Cats & friends
      </Logo>
      <ActionIcons matchesMobile={matchesMobile} />
    </HeaderContainer>
  );
}
