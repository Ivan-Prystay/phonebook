import { useAuth } from 'hooks';
import { StyledLinkNav, NavWraper } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavWraper>
      <StyledLinkNav to="/">Home</StyledLinkNav>
      {isLoggedIn && <StyledLinkNav to="/contacts">Contacts</StyledLinkNav>}
    </NavWraper>
  );
};
