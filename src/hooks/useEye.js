import React, { useState } from "react";
import { ButtonX } from "../style/components/ButtonLogin";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const usePassword = () => {
  const [visible, setVisibility] = useState(false);

  const Icon = (
    <button
      type="button"
      onClick={() => setVisibility((visibility) => !visibility)}
    >
      {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
    </button>
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default usePassword;
