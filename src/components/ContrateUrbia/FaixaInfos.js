import React from 'react';
import { AiFillSignal } from 'react-icons/ai';
import { AiFillDatabase } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const FaixaInfo = [
  {
    title: 'SaaS Online',
    description:
      'Procure funcionalidade que respondam de forma online a suas demandas de estudo de viabilidade ou análise de loteamento.',
    icon: <AiFillSignal size={28} color={'#0031a8'} />,
    buttonText: 'veja mais',
    link: '#',
  },
  {
    title: 'Taylor Made',
    description:
      'Envie levantamentos de terrenos para desenvolvermos de forma rápida e dinâmica a proposta de desenho urbano e placemarketing',
    icon: <AiFillDatabase size={28} color={'#0031a8'} />,
    buttonText: 'veja mais',
    link: '#',
  },
  {
    title: 'Soluções Customizadas',
    description:
      'Como podemos desenvolver soluções envolvendo automatização, design generation e IA dentro da sua empresa',
    icon: <AiOutlineCheckCircle size={28} color={'#0031a8'} />,
    buttonText: 'veja mais',
    link: '#',
  },
];
