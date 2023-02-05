import styled from 'styled-components';

export const ContactItem = styled.li`
  font-size: inherit;
  line-height: 150%;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
`;

export const Item = styled.div``;

export const DeleteContact = styled.button`
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #e2e2e2f1;
  border-radius: 10px;

  &:active,
  &:hover {
    background-color: #467bcad2;
    color: white;
    outline: none;
    border: none;
  }
  &:active {
    color: red;
    background-color: #e2e2e2f1;
  }
`;
