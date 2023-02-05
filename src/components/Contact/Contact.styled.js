import styled from 'styled-components';

export const ContactItem = styled.li`
  font-size: inherit;
  line-height: 150%;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding-bottom: 8px;
`;

export const Item = styled.div``;

export const DeleteContact = styled.button`
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;

  &:hover,
  :focus {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    outline: none;
    border: none;
  }
  &.active {
    color: red;
    background-color: rgba(255, 255, 255, 1);
  }
`;
