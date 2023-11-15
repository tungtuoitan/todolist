import { useContext } from "react";
import Item from "./item.js";
import { Top1Context } from "../context/top1Context.js";

export default function ItemLists() {
  const ct = useContext(Top1Context);
  const { textArr } = ct;
  return (
    <div className="w-full flex justify-center overflow-auto  mt-6 mb-10  h-c200 ">
      <div className="w-2/3 border3">
        {textArr.map((item, index) => {
          return <Item key={index} itemm={item} index={index} />;
        })}
      </div>
    </div>
  );
}
