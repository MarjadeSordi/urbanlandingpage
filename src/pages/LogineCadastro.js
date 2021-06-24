import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import firebase from 'firebase';
import {
  DivBlocos,
  divBotao,
  DivInput,
  InputLogin,
  InputSenha,
  TitleLogin,
  ButtonGoogle,
  ButtonLogarCadastrar,
  DivLogar,
  DivCadastrar,
} from '../style/Pages/LogineCadastroPage';
import { ButtonLogar } from '../style/components/ButtonLogin';

const LogineCadastro = () => {
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [logaremail, setlogarEmail] = useState('');
  const [logarsenha, setlogarSenha] = useState('');
  const [user, setUser] = useState(false);
  const history = useHistory();

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

  const Logar = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(logaremail, logarsenha)
      .then(user => {
        setUser(true);
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
    if (user === true) {
      return history.push('/logado');
    }
  };

  const actionLoginGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        if (user) {
          return history.push('logado');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const CadastraEmail = e => {
    let setar = e.target.value;
    setEmail(setar);
  };

  const CadastraSenha = e => {
    let setar = e.target.value;
    setSenha(setar);
  };

  const LogarcomEmail = e => {
    let setar = e.target.value;
    setlogarEmail(setar);
  };

  const LogarcomSenha = e => {
    let setar = e.target.value;
    setlogarSenha(setar);
  };
  return (
    <div>
      <DivBlocos>
        <DivLogar>
          <TitleLogin> Fazer Login </TitleLogin>
          <form>
            <DivInput>
              <InputLogin
                type={'email'}
                placeholder={'e-mail de usuário'}
                onChange={LogarcomEmail}
              />
            </DivInput>
            <DivInput>
              <InputSenha
                type={'password'}
                placeholder={'senha'}
                onChange={LogarcomSenha}
              />
            </DivInput>

            <ButtonLogarCadastrar type="button" onClick={Logar}>
              {' '}
              Logar{' '}
            </ButtonLogarCadastrar>

            <ButtonGoogle type="button" onClick={actionLoginGoogle}>
              {' '}
              Fazer login com o Google
            </ButtonGoogle>
          </form>
        </DivLogar>
        <DivCadastrar>
          <TitleLogin> Cadastrar </TitleLogin>
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
            <divBotao>
              <ButtonLogarCadastrar type="button" onClick={Login}>
                {' '}
                Cadastrar{' '}
              </ButtonLogarCadastrar>

              <ButtonGoogle type="button" onClick={actionLoginGoogle}>
                {' '}
                Cadastrar com o Google
              </ButtonGoogle>
            </divBotao>
          </form>
        </DivCadastrar>
      </DivBlocos>
    </div>
  );
};

export default LogineCadastro;
