import { useState } from "react";
import { useContext } from "react";
import { Top1Context } from "../context/top1Context";
import EnterBtn from "./enterBtn";
import FirstInputUI from "./firstInputUI";

export default function FirstInput() {
  const [value, setValue] = useState("");
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const ct = useContext(Top1Context);
  const handleEnter = () => {
    ct.setTextArr([...ct.textArr, value]);
    setValue('')
  };

  return (
    <FirstInputUI
      handleOnChange={handleOnChange}
      value={value}
      handleEnter={handleEnter}
      isEditMode = {ct.isEditMode}
    />
  );
}
