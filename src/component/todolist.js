import { useState } from "react";
import { Top1Context } from "../context/top1Context";
import PopUp from "./popup";

export default function ToDoList() {
  const [textArr, setTextArr] = useState(["x"]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [indexOfEditItem, setIndexOfEditItem] = useState(null);
  const ct = {
    textArr,
    setTextArr,
    isEditMode,
    setIsEditMode,
    indexOfEditItem,
    setIndexOfEditItem,
  };

  return (
    <Top1Context.Provider value={ct}>
      <div className="w-full h-full bg-white flex justify-center item-center ">
        <PopUp />
      </div>
    </Top1Context.Provider>
  );
}
