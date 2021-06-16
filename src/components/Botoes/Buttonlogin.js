import React, { useState } from 'react';
import {
  ButtonLogar,
  DivLogar,
  InputLogin,
  ButtonSubmit,
  ButtonX,
} from '../../style/components/ButtonLogin';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import usePassword from '../../hooks/useEye';
import { useHistory } from 'react-router-dom';

const ButtonLogin = () => {
  const redirecionar = useHistory();

  const click = () => {
    redirecionar.push('/signup');
  };

  return (
    <>
      {' '}
      <ButtonLogar type="button" onClick={click}>
        {' '}
        Login{' '}
      </ButtonLogar>
    </>
  );
};

export default ButtonLogin;
