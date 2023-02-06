import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: white;

  &:hover,
  &.active {
    background: rgba(255, 255, 255, 0.5);
    color: black;
  }
`;
