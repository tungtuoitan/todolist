import Item from "./item.js";
import { useSelector } from "react-redux";

export default function ItemLists() {
  const data = useSelector((state) => state.data.data);
  return (
    <div className="w-full flex justify-center overflow-auto  mt-6 mb-10  h-c200 ">
      <div className="w-2/3 caret-transparent">
        {data.map((item, index) => {
          return <Item key={index} item={item} index={index} />;
        })}
      </div>
    </div>
  );
}
