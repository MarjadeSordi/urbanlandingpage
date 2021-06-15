import React, { useState } from "react";
import {
  ButtonLogar,
  DivLogar,
  InputLogin,
  ButtonSubmit,
  ButtonX,
} from "../../style/components/ButtonLogin";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import usePassword from "../../hooks/useEye";
import { useHistory } from "react-router-dom";

const ButtonLogin = () => {
  const [mostraLogin, setMostraLogin] = useState(false);
  const [passwordType, iconPassword] = usePassword();

  const show = () => {
    setMostraLogin(true);
  };
  const exit = () => {
    setMostraLogin(false);
  };

  const redirecionar = useHistory();

  const click = () => {
    redirecionar.push("/signup");
  };

  return (
    <>
      {" "}
      <ButtonLogar type="button" onClick={click}>
        {" "}
        Login{" "}
      </ButtonLogar>
      <DivLogar visible={mostraLogin}>
        <form>
          <ButtonX onClick={exit}>
            {" "}
            <AiOutlineClose size={14} />
          </ButtonX>
          <InputLogin type="text" />
          <InputLogin type="password" />
          <ButtonSubmit type="submit">
            {" "}
            <span>
              {" "}
              <AiOutlineRight size={20} />{" "}
            </span>
          </ButtonSubmit>
        </form>
      </DivLogar>
    </>
  );
};

export default ButtonLogin;
