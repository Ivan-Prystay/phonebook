import styled from 'styled-components';

export const Wraper = styled.div`
  background: rgba(0, 0, 0, 0.5);
`;

export const ListContact = styled.ul`
  padding: 20px;
  color: white;
  margin: 0 auto;
  width: 500px;
  @media (max-width: 600px) {
    & {
      width: 300px;
    }
  }
`;
