import styled from 'styled-components';

export const TituloContratacao = styled.h1`
  color: #828282;
  text-align: center;
  margin: 2%;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  @media (max-width: 700px) {
    font-size: 150%;
    margin-top: 10%;
    margin-bottom: 5%;
  }
`;

export const FieldContratacao = styled.fieldset`
  padding: 16px;
  box-shadow: 3px 3px #eeeee0;
  border-radius: 8px;
  > legend {
    margin-left: 40%;
  }
`;

export const ListaContratacao = styled.li`
  list-style: none;
  padding-left: 8%;
`;

export const CapsulaContratacao = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InternaContratacao = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
  text-align: center;
  justify-content: center;
  align-itens: center;
  width: 200px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const TituloContratacaoInterna = styled.h2`
  font-weight: 400;
  color: #828282;
`;

export const TextoContratacao = styled.p`
  word-wrap: break-word;
  line-height: 200%;
`;

export const HrInterna = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;
export const Price = styled.p`
  font-weight: 700;
  font-size: 150%;
  color: #828282;
`;

export const ButtonTour = styled.button`
  border: none;
  color: #ffffff;
  background-color: #0031a8;
  padding: 1%;
  width: 20%;
  margin: 5%;
  border-radius: 8px;
  margin-left: 40%;
  cursor: pointer;
  &: hover {
    background-color: #ffffff;
    color: #0031a8;
  }
  @media (max-width: 700px) {
    width: 90%;
    margin-left: 10%;
    padding: 2%;
  }
`;
