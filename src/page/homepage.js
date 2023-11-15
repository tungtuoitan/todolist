import FirstInput from "../component/firstInput";
import Item from "../component/item";
import ToDoList from "../component/todolist";

export default function HomePage() {
  return (
    <div className="w-full h-full bg-white flex justify-center item-center">
      <ToDoList />
    </div>
  );
}
