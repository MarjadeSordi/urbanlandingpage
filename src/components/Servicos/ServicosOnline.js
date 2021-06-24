import React from 'react';
import { ButtonVermais } from '../../style/components/FaixacomIcones';
import {
  DivDireita,
  TituloServicos,
  ButtonServicos,
  CapsulaItems,
  TextoDestaque,
  TextoDescricao,
  DivTexto,
  DivTextoMeio,
} from '../../style/components/ServicosOnline';
import { ServicoInfo } from './ServicosOnlineDados';

const ServicosOnline = () => {
  return (
    <>
      <TituloServicos>Serviços de SaSS Online </TituloServicos>

      {ServicoInfo.map(item => {
        if (item.id === '1') {
          return (
            <CapsulaItems>
              {item.image}{' '}
              <DivTexto>
                <TextoDestaque>
                  {item.title} <br />
                </TextoDestaque>{' '}
                <TextoDescricao>
                  {item.description}
                  <br />
                </TextoDescricao>
                <ButtonServicos> {item.buttonText} </ButtonServicos>
              </DivTexto>
            </CapsulaItems>
          );
        }
        if (item.id === '2') {
          return (
            <CapsulaItems>
              <DivTextoMeio>
                <TextoDestaque>
                  {item.title} <br />
                </TextoDestaque>{' '}
                <TextoDescricao>
                  {item.description}
                  <br />
                </TextoDescricao>
                <ButtonServicos> {item.buttonText} </ButtonServicos>
              </DivTextoMeio>{' '}
              {item.image}{' '}
            </CapsulaItems>
          );
        }
        if (item.id === '3') {
          return (
            <CapsulaItems>
              {item.image}{' '}
              <DivTexto>
                <TextoDestaque>
                  {item.title} <br />
                </TextoDestaque>{' '}
                <TextoDescricao>
                  {item.description}
                  <br />
                </TextoDescricao>
                <ButtonServicos> {item.buttonText} </ButtonServicos>
              </DivTexto>
            </CapsulaItems>
          );
        }
      })}
    </>
  );
};

export default ServicosOnline;
