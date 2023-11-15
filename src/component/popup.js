import InputPart from "./inputPart";
import ItemLists from "./itemLists";

export default function PopUp() {
  return (
    <div
      className="todolist-container flex flex-col items-center  rounded-lg
        xy-center overflow-hidden text-white p-4 w-1/2 h-1/2 fixed  "
    >
      <h2 className="font-bold text-c40 ">Todo List</h2>
      <InputPart />
      <ItemLists />
    </div>
  );
}
