import { useDispatch, useSelector } from "react-redux";
import { editData } from "../slice.js/dataSlice";

export default function DelBtn({ index }) {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  //# handle click xóa
  const handleClickDel = () => {
    const dataCopy = [
      ...data.slice(0, index),
      ...data.slice(index + 1, data.length),
    ];
    dispatch(editData(dataCopy));
  };
  return (
    <button
      className="  overflow-hidden bg-black222/40  transition-all text-black
          hover:bg-black222 text-white px-4 py-c2 rounded-sm 
          hover:bg-black222 bg-bg-black/50"
      onClick={handleClickDel}
    >
      Del
    </button>
  );
}
