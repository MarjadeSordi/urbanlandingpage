import styled from 'styled-components';

export const CapsulaFaixa = styled.div`
  width: 100%;
  background-color: #f8f8ff;
`;

export const FaixaPrincipal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
`;

export const TituloFaixa = styled.h1`
  font-weight: 500;  
  margin-left: 40%;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2%;
  word-spacing: 6%;
  text align: center;
  color: #373435;

`;

export const TituloIcones = styled.h2`
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  color: #373435;
`;

export const DivTexto = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5%;
`;
export const TextoIcones = styled.p`
  font-weight: 400;
  color: #696969;
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
export const ListarIcones = styled.li`
  list-style: none;
`;

export const ButtonVermais = styled.button`
  border: none;
  color: #ffffff;
  background-color: #65325b;
  padding: 2%;
  width: auto;
  border-radius: 30px;
  box-shadow: 0 0 1em #add8e6;
  cursor: pointer;
  &: hover {
    background-color: #fffafa;
    color: #65325b;
  }
`;
