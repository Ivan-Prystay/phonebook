import { StyledLink, Wraper } from './AuthNav.styled';

export function AuthNav() {
  return (
    <Wraper>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Wraper>
  );
}
