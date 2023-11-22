import { useDispatch, useSelector } from "react-redux";
import { editData } from "../slice.js/dataSlice";
import { setIsEditMode } from "../slice.js/todoItemSlice";

export default function ChangeBtn() {
  const indexOfEditItem = useSelector(
    (state) => state.todoItem.indexOfEditItem
  );
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const editValue = useSelector((state) => state.editSection.editValue);

  const handleOnClick = () => {
    const dataCopy = [...data];
    dataCopy[indexOfEditItem] = editValue;
    dispatch(editData(dataCopy));
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
