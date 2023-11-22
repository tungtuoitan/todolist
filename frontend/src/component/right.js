import { useSelector } from "react-redux";
import DelBtn from "./delBtn";
import EditBtn from "./editBtn";

export default function Right({ index }) {
  const indexOfHovering = useSelector(
    (state) => state.todoItem.indexOfHovering
  );
  const isHovering = useSelector((state) => state.todoItem.isHovering);
  return (
    <div
      className={`inline-flex items-center justify-end  h-full absolute right-0  
    ${isHovering && indexOfHovering === index ? "" : "opacity-0"}`}
    >
      <div className="relative  flex justify-end gap-2 w-c120x h-c28 items-center  hover:overflow-visible  ">
        <EditBtn index={index} />
        <DelBtn index={index} />
      </div>
    </div>
  );
}
