import React from "react";
import Menucapa from "../components/Menu/Menucapa";
import urbialogo from "../assets/urbialogo.png";
import {
  Imagemlogo,
  DivCapa,
  TituloCapa,
  TextoCapa,
  HrCapa,
  HrDivisao,
} from "../style/Pages/Homepage";
import FaixacomIcones from "../components/ContrateUrbia/FaixacomIcones";
import ServicosOnline from "../components/Servicos/ServicosOnline";
import FormasdeContratacao from "../components/FormasdeContratacao/FormasdeContratacao";
import SwiperDepoimentos from "../components/Swiper/SwiperDepoimentos";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <DivCapa>
        <TituloCapa>
          {" "}
          Criação <br /> Análise e <br /> Customização{" "}
        </TituloCapa>
        <HrCapa />
        <TextoCapa>
          {" "}
          Desenvolvemos projetos de loteamento e comunidades planejadas <br />
          utilizando design generativo, inteligência artificial e big data.{" "}
        </TextoCapa>
        <Menucapa />
      </DivCapa>

      <FaixacomIcones />
      <ServicosOnline />
      <FormasdeContratacao />
      <SwiperDepoimentos />
      <Footer />
    </>
  );
};

export default Homepage;
