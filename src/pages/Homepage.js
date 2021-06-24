import React from 'react';
import Menucapa from '../components/Menu/Menucapa';
import urbialogo from '../assets/urbialogo.png';
import {
  Imagemlogo,
  DivCapa,
  TituloCapa,
  TextoCapa,
  HrCapa,
  HrDivisao,
} from '../style/Pages/Homepage';
import FaixacomIcones from '../components/ContrateUrbia/FaixacomIcones';
import ServicosOnline from '../components/Servicos/ServicosOnline';
import FormasdeContratacao from '../components/FormasdeContratacao/FormasdeContratacao';
import SwiperDepoimentos from '../components/Swiper/SwiperDepoimentos';
import Footer from '../components/Footer/Footer';
import Buttonlogin from '../components/Botoes/Buttonlogin';
import Buttoncadastro from '../components/Botoes/Buttoncadastro';
import ButtonWhatsapp from '../components/Botoes/ButtonWhatsapp';

const Homepage = () => {
  return (
    <>
      <DivCapa>
        <ButtonWhatsapp />
        <TituloCapa>
          {' '}
          Criação, <br /> Análise & <br /> Customização{' '}
        </TituloCapa>
        <HrCapa />
        <TextoCapa>
          {' '}
          Desenvolvemos projetos de loteamento e comunidades planejadas <br />
          utilizando design generativo, inteligência artificial e big data.{' '}
          <Buttonlogin />
        </TextoCapa>
      </DivCapa>
      <FaixacomIcones />
      <ServicosOnline />
      <FormasdeContratacao />
      <SwiperDepoimentos />
    </>
  );
};

export default Homepage;
