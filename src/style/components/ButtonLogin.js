import styled from 'styled-components';

export const ButtonLogar = styled.button`
  border: none;
  color: #ffffff;
  background-color: #393a3a;
  padding: 1%;
  width: 30%;
  border-radius: 8px;
  display: block;
  margin-top: 2%;
  cursor: pointer;
  &: hover {
    background-color: #fffafa;
    color: #393a3a;
  }
  @media (max-width: 700px) {
    margin-top: 5%;
  }
`;
