import { HeaderContainer, Logo } from '../../styles/header';
import Menu from '../Menu';
import ActionIcons from '../ActionIcons/';

export default function HeaderDesktop({ matchesMobile }) {
  return (
    <HeaderContainer>
      <Logo>
        Cats & friends
      </Logo>
      <Menu />
      <ActionIcons matchesMobile={matchesMobile} />
    </HeaderContainer>
  );
}
