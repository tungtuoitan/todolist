import ChangeBtn from "./changeBtn";
import EditInput from "./editInput";

export default function EditSection() {
  return (
    <div className={`flex justify-center mt-c4`}>
      <EditInput />
      <ChangeBtn />
    </div>
  );
}
