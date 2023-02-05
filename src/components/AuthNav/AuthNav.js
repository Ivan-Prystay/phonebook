import { StyledLink } from './AuthNav.styled';

export function AuthNav() {
  return (
    <div style={{ display: 'flex', columnGap: '10px' }}>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
}
