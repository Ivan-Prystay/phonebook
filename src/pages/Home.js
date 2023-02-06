import styled from 'styled-components';

export const Welcome = styled.h1`
  text-align: center;
  text-shadow: #fff 2px 0px 2px, #fff 0px 2px 2px, #fff 0px -2px 2px,
    #fff -2px 0px 2px;
`;

export default function Home() {
  return (
    <div>
      <Welcome>Phonebook welcome page</Welcome>
    </div>
  );
}
