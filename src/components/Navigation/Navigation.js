import { useAuth } from 'hooks';
import { StyledLinkNav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '10px',
      }}
    >
      <StyledLinkNav to="/">Home</StyledLinkNav>
      {isLoggedIn && <StyledLinkNav to="/contacts">Contacts</StyledLinkNav>}
    </nav>
  );
};
