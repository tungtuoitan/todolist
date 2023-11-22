import EditBtn from "./editBtn";
import DelBtn from "./delBtn";

export default function EditAndDel({ index }) {
  return (
    <div
      className="relative  flex justify-end gap-2
    w-c120 h-c28 items-center
    hover:overflow-visible border1 "
    >
      <EditBtn index={index} />
      <DelBtn index={index} />
    </div>
  );
}
