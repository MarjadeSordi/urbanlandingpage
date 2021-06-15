import React from "react";
import { DivRedesSociais, HrFooter } from "../../style/components/Footer";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <HrFooter />{" "}
      <DivRedesSociais>
        <AiOutlineTwitter size={28} color={"#828282"} />
        <AiOutlineInstagram size={28} color={"#828282"} />
        <AiOutlineFacebook size={28} color={"#828282"} />
      </DivRedesSociais>
    </>
  );
};

export default Footer;
