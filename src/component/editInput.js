import { useState, useEffect } from "react";
import { useContext } from "react";
import { Top1Context } from "../context/top1Context";
import EditInputUI from "./editInputUI";

export default function EditInput() {
  const ct = useContext(Top1Context);
  const [value0, setValue0] = useState("");
  const handleOnChange = (e) => {
    setValue0(e.target.value);
  };
  useEffect(() => {
    if (ct.isEditMode) {
      setValue0(ct.textArr[ct.indexOfEditItem]);
    }
  }, [ct.isEditMode]);
  const handleChange = () => {
    const textArrCopy = [...ct.textArr];
    textArrCopy[ct.indexOfEditItem] = value0;
    ct.setTextArr(textArrCopy);
    ct.setIsEditMode(false)
  };
  return (
    <EditInputUI
      handleOnChange={handleOnChange}
      value={value0}
      handleChange={handleChange}
    />
  );
}
