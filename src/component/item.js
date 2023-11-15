import TwoButtons from "./button";

export default function Item({ itemm, index }) {
  return (
    <div className="flex justify-center border1 ">
      <div className="w-full h-c28 mb-4 flex   justify-between  relative  border2">
        <div
          className="mr-4  border-white/50 hover:border-white
         border-solid border-b-c1 flex items-end border3"
        >
          <div className="w-2 h-2  bg-white mr-2 mb-c6"></div>
          {itemm}
        </div>

        <div
          className="flex items-center justify-end  border3
        w-full h-full absolute right-0  opacity-0x hover:opacity-100"
        >
          <TwoButtons index={index} />
        </div>
      </div>
    </div>
  );
}
