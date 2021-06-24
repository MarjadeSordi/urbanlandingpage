import React from 'react';
import { ButtonWhats } from '../../style/components/ButtonWhatsapp';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const ButtonWhatsapp = () => {
  const linkwhatsApp = `https://api.whatsapp.com/send?phone=555199829400&text=Texto`;

  function Linkpara() {
    window.location.href = linkwhatsApp;
  }

  return (
    <>
      {' '}
      <ButtonWhats type="button" onClick={Linkpara}>
        <AiOutlineWhatsApp size={45} color={'#0031a8'} />
      </ButtonWhats>
    </>
  );
};

export default ButtonWhatsapp;
