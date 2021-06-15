import React from "react";
import { Menuinfo } from "./Menuinfo";
import { ListMenu, MenuStyle, ListText } from "../../style/menucapa";
import { Link } from "react-router-dom";
import ButtonLogin from "../Botoes/Buttonlogin";
import ButtonCadastro from "../Botoes/Buttoncadastro";
import { Imagemlogo } from "../../style/Pages/Homepage";
import urbialogo from "../../assets/urbialogo.png";

const Menucapa = () => {
  return (
    <MenuStyle>
      <Imagemlogo src={urbialogo} alt="Logotipo URBIA" />
      {Menuinfo.map((item, key) => {
        return (
          <ListMenu key={key}>
            {" "}
            <Link to={item.link} style={{ textDecoration: "none" }}>
              {" "}
              <ListText>{item.title} </ListText>
            </Link>{" "}
          </ListMenu>
        );
      })}
      <ButtonLogin /> <ButtonCadastro />
    </MenuStyle>
  );
};

export default Menucapa;
