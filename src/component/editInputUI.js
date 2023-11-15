import { Top1Context } from "../context/top1Context";
import FirstInput from "./firstInput";
import { useContext, useState } from "react";

export default function EditInputUI(props) {
  const { handleOnChange, value, handleChange, isEditMode } = props;
  const ct = useContext(Top1Context);
  const [valueTest, setValueTest] = useState("");
  
  return (
    <div
      className={`flex justify-center mt-c4
    `}
    >
      <input
        className={`mr-2 px-2 h-c28 rounded-sm outline-none pb-c2 text-white
           bg-transparent border-b-c1 border-solid border-white`}
        value={value}
        onChange={(e) => {
          handleOnChange(e)
        }}
      />
      <button
        className=" enter-btn  hover:border-white border-black222 border-c1 border-solid 
       bg-black text-white px-4 py-c2  rounded-sm mr-2"
        onClick={handleChange}
      >
        Change
      </button>
    </div>
  );
}
