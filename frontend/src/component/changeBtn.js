import { useDispatch, useSelector } from "react-redux";
import { editData } from "../slice.js/dataSlice";
import { setIsEditMode } from "../slice.js/todoItemSlice";
import axios from "axios";
import { setIsDBChange } from "../slice.js/generalSlice";

export default function ChangeBtn() {
  const indexOfEditItem = useSelector(
    (state) => state.todoItem.indexOfEditItem
  );
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const editValue = useSelector((state) => state.editSection.editValue);

  const handleOnClick = () => {
    axios
      .post("http://192.168.1.61:80/change-data", {
        id: indexOfEditItem,
        content: editValue,
      })
      .then(() => {
        dispatch(setIsDBChange());
      })
      .catch((err) => {
        console.error(err.message);
      });

    dispatch(setIsEditMode(false));
  };
  return (
    <button
      className=" enter-btn  hover:border-white border-black222 border-c1 border-solid 
       bg-black text-white px-4 py-c2  rounded-sm mr-2"
      onClick={handleOnClick}
    >
      Change
    </button>
  );
}
