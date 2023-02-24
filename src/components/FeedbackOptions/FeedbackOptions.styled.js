import styled from 'styled-components';

export const ListBtn = styled.ul`
  list-style: none;
  display: flex;
`;

export const Button = styled.button`
  margin-right: 10px;
  border-radius: 5px;
  border-color: gray;
  background-color: white;
  font-weight: 500;
  text-transform: capitalize;
  font-style: italic;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgb(28, 185, 236);
    cursor: pointer;
  }
`;
