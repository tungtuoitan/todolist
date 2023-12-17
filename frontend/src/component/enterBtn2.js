import { useDispatch, useSelector } from "react-redux";
import { setData } from "../slice.js/dataSlice";
import axios from "axios";
import { useEffect } from "react";
import { setIsDBChange } from "../slice.js/generalSlice";

export default function EnterBtn2() {
  const value = useSelector((state) => state.inputSection.mainValue);
  const dispatch = useDispatch();

  const handleEnter = () => {
    dispatch(setData(value));

    // #
    axios
      .post("http://192.168.1.61:80/add-item", { value: value })
      .then((res) => {
        dispatch(setIsDBChange());
      })
      .catch((error) => {
        console.error("thêm bị lỗi", error);
      });
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
