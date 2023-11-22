import { useDispatch, useSelector } from "react-redux";
import { setMainValue } from "../slice.js/inputSlice";
import { setData } from "../slice.js/dataSlice";

export default function Input2() {
  const value = useSelector((state) => state.inputSection.mainValue);
  const dispatch = useDispatch();

  //# onChange
  const handleOnChange = (e) => {
    dispatch(setMainValue(e.target.value));
  };

  //# khi enter
  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(setData(value));
      dispatch(setMainValue(""));
    }
  };

  return (
    <input
      className=" mr-2 px-2 h-c28 rounded-sm outline-none pb-c2 text-black222"
      value={value}
      onChange={(e) => {
        handleOnChange(e);
      }}
      onKeyDown={(e) => handleOnKeyDown(e)}
    />
  );
}
