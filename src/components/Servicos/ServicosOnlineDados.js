import React from "react";
import teste from "../../assets/teste.jpeg";
import { ImagemServico } from "../../style/components/ServicosOnline";

export const ServicoInfo = [
  {
    id: "1",
    title: "Geração automática de parcelamento de solo, número de lotes e VGV",
    description: "Online Planner",
    image: <ImagemServico src={teste} alt="serviço" />,
    buttonText: "em breve",
    link: "#",
  },
  {
    id: "2",
    title: "Analise e Perfomance de traçados urbanos",
    description: "Analytcs",
    image: <ImagemServico src={teste} alt="serviço" />,
    buttonText: "Add ao carrinho",
    link: "#",
  },
  {
    id: "3",
    title: "Customize as estratégias ",
    description: "Custon Pack",
    image: <ImagemServico src={teste} alt="serviço" />,
    buttonText: "em breve",
    link: "#",
  },
];
