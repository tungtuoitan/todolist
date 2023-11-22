import { useSelector } from "react-redux";
import Input2 from "./input2";
import EnterBtn2 from "./enterBtn2";

export default function InputSection() {
  const isEditMode = useSelector((state) => state.todoItem.isEditMode);

  return (
    <>
      <div
        className={`first-input-ui flex justify-center ${
          isEditMode ? "mt-c-33" : ""
        }`}
      >
        <Input2 />
        <EnterBtn2  />
      </div>
    </>
  );
}
