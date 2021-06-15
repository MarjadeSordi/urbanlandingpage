import React from "react";
import {
  TituloContratacao,
  ListaContratacao,
  CapsulaContratacao,
  InternaContratacao,
  TituloContratacaoInterna,
  TextoContratacao,
  ButtonContratacao,
  FieldContratacao,
  HrInterna,
  Price,
  ButtonTour,
} from "../../style/components/FormasdeContracao";

import { ContratacaoInfo } from "./FormasdeContratacaodados";

const FormasdeContratacao = () => {
  return (
    <>
      {" "}
      <TituloContratacao> Formas de contratação </TituloContratacao>
      <CapsulaContratacao>
        {ContratacaoInfo.map((item, key) => {
          return (
            <ListaContratacao key={key}>
              <FieldContratacao>
                <legend> {item.icon}</legend>
                <InternaContratacao>
                  <TituloContratacaoInterna>
                    {" "}
                    {item.title}{" "}
                  </TituloContratacaoInterna>
                  <TextoContratacao>
                    {item.description.map((tipe) => {
                      return <li>{tipe}</li>;
                    })}

                    <HrInterna />
                    <Price> {item.price} </Price>
                  </TextoContratacao>
                  <ButtonContratacao>{item.buttonText} </ButtonContratacao>
                </InternaContratacao>
              </FieldContratacao>
            </ListaContratacao>
          );
        })}
      </CapsulaContratacao>
      <ButtonTour> Quero fazer um tour gratuito </ButtonTour>
    </>
  );
};

export default FormasdeContratacao;
