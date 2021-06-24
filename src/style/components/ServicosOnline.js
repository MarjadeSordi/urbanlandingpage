import styled from 'styled-components';
import helvetica from '../../assets/fonts/helvetica-neue.ttf';

export const ImagemServico = styled.img`
  width: 40%;
  margin: 5%;
  @media (max-width: 700px) {
    width: 50%;
    margin-left: 25%;
  }
`;

export const TituloServicos = styled.h1`
  margin-top: 2%;
  font-weight: 700;
  margin-left: 40%;
  letter-spacing: 2%;
  word-spacing: 6%;
  text-align: center;
  color: #373435;
  font-family: ${helvetica};
  @media (max-width: 700px) {
    margin-left: 5%;
  }
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
  width: 90%;
  margin-left: 5%;
  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const DivTexto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1%;
  width: 40%;
  @media (max-width: 700px) {
    width: 100%;
    margin: 0;
  }
`;

export const DivTextoMeio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  margin-top: 1%;
  width: 40%;
  margin-left: 5%;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 700px) {
    width: 100%;
    margin: 0;
  }
`;

export const TextoDestaque = styled.p`
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  font-size: 200%;
  color: #373435;
  @media (max-width: 700px) {
    font-size: 150%;
  }
`;

export const TextoDescricao = styled.p`
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  margin-top: 10%;
  font-size: 150%;
  margin-bottom: 10%;
  color: #373435;
`;

export const ButtonServicos = styled.button`
  border: none;
  color: #ffffff;
  background-color: #393a3a;
  padding: 2%;
  border-radius: 8px;
  width: 40%;
  cursor: pointer;
  &: hover {
    background-color: #fffafa;
    color: #393a3a;
  }
`;

export const DivServicoCapsula = styled.div``;
