import { useContext } from "react";
import { Top1Context } from "../context/top1Context";
import TwoButtonsUI from "./twoButtonsUI";

export default function TwoButtons({ index }) {
  const ct = useContext(Top1Context);
  const handleClickEdit = () => {
    ct.setIsEditMode(true);
    ct.setIndexOfEditItem(index);
  };
  const handleClickDel = () => {
    const textArrCopy = [
      ...ct.textArr.slice(0, index),
      ...ct.textArr.slice(index+1, ct.textArr.length),
    ];
    ct.setTextArr(textArrCopy);
  };
  return (
    <TwoButtonsUI
      handleClickEdit={handleClickEdit}
      handleClickDel={handleClickDel}
    />
  );
}
