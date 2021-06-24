import styled from 'styled-components';

export const DivBlocos = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 10%;
  padding-bottom: 20%;
  display: flex;
  @media (max-width: 700px) {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;

export const DivInput = styled.div`
  background-color: transparent;
  width: 100%;
  border: 1px solid #0031a8;
  border-radius: 5px;
  margin-bottom: 5%;
  margin-top: 5%;
`;

export const InputLogin = styled.input`
  background-color: transparent;
  border: none;
  width: 70%;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
    -webkit-transition-delay: 9999s;
  }
`;

export const InputSenha = styled.input`
  background-color: transparent;
  border: none;
  width: 70%;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
    -webkit-transition-delay: 9999s;
  }
`;

export const TitleLogin = styled.h2`
  color: #0031a8;
  margin: 0 auto;
  padding-bottom: 2%;
`;

export const ButtonGoogle = styled.button`
  background-color: #4c89e3;
  color: #ffffff;
  border-radius: 8px;
  border: none;
  padding: 2%;
  width: 100%;
  cursor: pointer;
`;

export const ButtonLogarCadastrar = styled.button`
  background-color: #393a3a;
  color: #ffffff;
  border-radius: 8px;
  border: none;
  padding: 2%;
  display: block;
  margin-bottom: 5%;
  margin-top: 5%;
  width: 100%;
  cursor: pointer;
`;

export const divBotao = styled.div`
  justify-content: center;
  align-items:: center;

`;

export const DivLogar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10%;

  width: 100%;
`;

export const DivCadastrar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10%;
  width: 100%;
`;
