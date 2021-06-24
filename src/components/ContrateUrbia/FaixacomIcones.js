import React from 'react';
import {
  FaixaPrincipal,
  ListarIcones,
  TextoIcones,
  TituloFaixa,
  TituloIcones,
  DivTexto,
  ButtonVermais,
  CapsulaFaixa,
} from '../../style/components/FaixacomIcones';
import { HrDivisao } from '../../style/Pages/Homepage';
import { FaixaInfo } from './FaixaInfos';

const FaixacomIcones = () => {
  const linkwhatsApp = `https://api.whatsapp.com/send?phone=555199829400&text=Texto`;

  function Linkpara() {
    window.location.href = linkwhatsApp;
  }

  return (
    <CapsulaFaixa>
      <HrDivisao />
      <TituloFaixa> Como contratar a Urbia? </TituloFaixa>
      <FaixaPrincipal>
        {FaixaInfo.map((item, key) => {
          return (
            <ListarIcones key={key}>
              <DivTexto>
                {item.icon}
                <TituloIcones> {item.title} </TituloIcones>
                <TextoIcones> {item.description}</TextoIcones>
                <ButtonVermais onClick={Linkpara}>
                  {item.buttonText}{' '}
                </ButtonVermais>
              </DivTexto>
            </ListarIcones>
          );
        })}
      </FaixaPrincipal>
      <HrDivisao />
    </CapsulaFaixa>
  );
};

export default FaixacomIcones;
