import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Greeting = styled.p`
  margin: 0;
  padding-left: 10px;
  font-size: larger;
`;

export const UserName = styled.span`
  font-size: 18px;
  text-shadow: #fff 2px 0px 2px, #fff 0px 2px 2px, #fff 0px -2px 2px,
    #fff -2px 0px 2px;
  font-weight: 500;
`;

export const LogOut = styled.button`
  padding: 10px;
  border: 1px solid black;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.5);
  color: white;

  &:hover,
  :active {
    background: rgba(255, 255, 255, 0.5);
    color: black;
  }
`;
