import { useDispatch } from "react-redux";
import Content from "./content";
import Right from "./right";
import WhiteDot from "./whiteDot";
import { setIndexOfHovering, setIsHovering } from "../slice.js/todoItemSlice";

export default function Item({ item, index }) {
 


  
  return (
    <div
      className="todo-item flex items-center  w-full  mb-c20 relative 
      caret-transparent "
     
    >
      <WhiteDot />
      <Content item={item.content} />
      <Right index={index} />
    </div> 
  );
}
