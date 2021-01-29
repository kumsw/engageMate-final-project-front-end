import React from "react";
import { Input } from "@chakra-ui/react";
import style from "./index.module.css";

function AnswerInput(value, func) {
  return (
    <Input
      focusBorderColor="lime"
      className={style.borderColor}
      placeholder="Set answer"
      type="text"
      onChange={func}
    ></Input>
  );
}
export default AnswerInput;
