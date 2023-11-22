import { useDispatch, useSelector } from "react-redux";
import { setData } from "../slice.js/dataSlice";

export default function EnterBtn2() {
  const value = useSelector((state) => state.inputSection.mainValue);
  const dispatch = useDispatch();
  const handleEnter = () => {
    dispatch(setData(value));
  };
 
  return (
    <button
      className=" enter-btn  hover:border-white border-black222 border-c1 border-solid 
       bg-black text-white px-4 py-c2  rounded-sm mr-2"
      onClick={handleEnter}
    >
      Enter
    </button>
  );
}
