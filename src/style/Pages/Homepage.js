import styled from 'styled-components';
import helvetica from '../../assets/fonts/helvetica-neue.ttf';
import capa from '../../assets/capa_.gif';

export const DivCapa = styled.div`
  height: 70vh;
  background-position: center;
  background-size: cover;
  background-image: url(${capa});
`;

export const Imagemlogo = styled.img`
  width: 6%;
  height: 6%;
  padding-right: 55%;
  margin-left: 5%;
  margin-top: 1%;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 20%;
  }
`;

export const TituloCapa = styled.h1`
  font-weight: 800;
  font-family: ${helvetica};
  letter-spacing: 2%;
  word-spacing: 6%;
  margin-top: 12%;
  margin-left: 5%;
  color: #0031a8;
  font-size: 400%;
  @media (max-width: 700px) {
    font-weight: 800;
    font-size: 200%;
  }
`;

export const HrCapa = styled.hr`
  max-width: 20%;
  box-sizing: border-box;
  border-width: 0 0 1px;
  color: #373435;
  border-style: solid;
  margin-right: 75%;
`;

export const TextoCapa = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-left: 5%;
`;

export const HrDivisao = styled.hr`
  width: 70%;
  box-sizing: border-box;
  border-width: 0 0 1px;
  color: #373435;
  border-style: solid;
  margin-top: 0;
`;
