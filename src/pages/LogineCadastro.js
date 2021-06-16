import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import {
  DivInput,
  InputLogin,
  InputSenha,
} from '../style/Pages/LogineCadastroPage';

const LogineCadastro = () => {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');

  const Login = () => {
    auth
      .createUserWithEmailAndPassword(email, senha)
      .then(userCredential => {
        userCredential.user.sendEmailVerification();
        alert('E-mail de confirmação enviado');
      })
      .catch(err => {
        console.log(alert(err));
      });
  };

  console.log(senha, email);

  const CadastraEmail = e => {
    let setar = e.target.value;
    setEmail(setar);
  };

  const CadastraSenha = e => {
    let setar = e.target.value;
    setSenha(setar);
  };

  return (
    <div>
      <form>
        <DivInput>
          <InputLogin
            type={'email'}
            placeholder={'e-mail de usuário'}
            onChange={CadastraEmail}
          />
        </DivInput>
        <DivInput>
          <InputSenha
            type={'password'}
            placeholder={'senha'}
            onChange={CadastraSenha}
          />
        </DivInput>
        <button type="button" onClick={Login}>
          {' '}
          Cadastrar{' '}
        </button>
      </form>
    </div>
  );
};

export default LogineCadastro;
