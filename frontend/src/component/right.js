import { useSelector } from "react-redux";
import DelBtn from "./delBtn";
import EditBtn from "./editBtn";

export default function Right({ index }) {

  return (
    <div
      className={`inline-flex items-center justify-end  h-full w-full 
      absolute right-0 opacity-0 hover:opacity-100 
    `}
    >
      <div className="relative  flex justify-end gap-2 w-c120x h-c28 items-center  hover:overflow-visible  ">
        <EditBtn index={index} />
        <DelBtn index={index} />
      </div>
    </div>
  );
}
