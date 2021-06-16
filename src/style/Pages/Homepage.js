import styled from 'styled-components';
import giphy from '../../assets/giphy.gif';

export const DivCapa = styled.div`
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const Imagemlogo = styled.img`
  width: 40%;
  margin-left: 5%;
  margin-top: 5%;
`;

export const TituloCapa = styled.h1`
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2%;
  word-spacing: 6%;
  margin-top: 12%;
  margin-left: 5%;
  color: #373435;
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
