import { useDispatch } from "react-redux";
import { setIndexOfEditItem, setIsEditMode } from "../slice.js/todoItemSlice";

export default function EditBtn({index}) {
  const dispatch = useDispatch();

  const handleClickEdit = () => {
    dispatch(setIsEditMode(true));
    dispatch(setIndexOfEditItem(index));
  };
  return (
    <button
      className="  overflow-hidden bg-black222/40  transition-all text-black
          hover:bg-black222 text-white px-4 py-c2 rounded-sm 
          hover:bg-black222 bg-bg-black/50"
      onClick={handleClickEdit}
    >
      Edit
    </button>
  );
}
