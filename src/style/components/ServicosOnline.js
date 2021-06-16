import styled from 'styled-components';

export const ImagemServico = styled.img`
  width: 50%;
  margin: 5%;
`;

export const TituloServicos = styled.h1`
  font-weight: 500;  
  margin-left: 40%;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2%;
  word-spacing: 6%;
  text align: center;
  color: #373435;
`;

export const DivDireita = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DivEsquerda = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const CapsulaItems = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;
  padding-left: 5%;
  width: 90%;
`;

export const DivTexto = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  width: 50%;
`;

export const TextoDestaque = styled.p`
  font-weight: 500;

  font-family: 'Roboto', sans-serif;
  font-size: 200%;
  color: #373435;
`;

export const TextoDescricao = styled.p`
  font-weight: 400;

  font-family: 'Roboto', sans-serif;
  margin-top: 10%;
  font-size: 150%;
  margin-bottom: 10%;
  color: #373435;
`;

export const ButtonServicos = styled.button`
  border: none;
  color: #ffffff;
  background-color: #65325b;
  padding: 2%;
  width: 30%;
  border-radius: 30px;
  box-shadow: 0 0 1em #add8e6;
  cursor: pointer;
  &: hover {
    background-color: #fffafa;
    color: #65325b;
  }
`;
