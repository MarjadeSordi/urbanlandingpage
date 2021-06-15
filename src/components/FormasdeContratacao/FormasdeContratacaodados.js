import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";

export const ContratacaoInfo = [
  {
    title: "Pai-per-use",
    description: [
      "Free +1",
      "Parcelamento",
      "Analise",
      "Tabela de Precificação",
    ],
    icon: <AiOutlineUser size={40} color={" #68355e"} />,
    price: "$ 3.0k",
    buttonText: "Sign in",
    link: "#",
  },
  {
    title: "Triple",
    description: [
      "3 uploads",
      "Apresentação de análises",
      "Score dos Lotes",
      "Tabela de Precificação",
    ],
    icon: <AiOutlineUsergroupAdd size={40} color={" #68355e"} />,
    price: "$ 7.5k",
    buttonText: "Sign in",

    link: "#",
  },
  {
    title: "Unlimited",
    description: [
      "3 uploads",
      "Apresentação de análises",
      "Score dos Lotes",
      "Tabela de Precificação",
    ],
    icon: <BiBuildingHouse size={40} color={" #68355e"} />,
    price: "$ 15.0k anual",
    buttonText: "Sign in",
    link: "#",
  },
];
