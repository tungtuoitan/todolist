import { useDispatch } from "react-redux";
import Content from "./content";
import Right from "./right";
import WhiteDot from "./whiteDot";
import { setIndexOfHovering, setIsHovering } from "../slice.js/todoItemSlice";

export default function Item({ item, index }) {
  const dispatch = useDispatch();

  //# mouse enter
  const handleMouseEnter = () => {
    dispatch(setIsHovering());
    dispatch(setIndexOfHovering(index))
  };
  
  return (
    <div
      className="todo-item flex items-center  w-full  mb-c20 relative caret-transparent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseEnter}
    >
      <WhiteDot />
      <Content item={item} />
      <Right index={index} />
    </div>
  );
}
