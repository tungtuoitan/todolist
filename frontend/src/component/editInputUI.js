import { forwardRef } from "react";

const EditInputUI = forwardRef((props, ref) => {
  const { editValue, handleOnChange, handleOnKeyDown } = props;
  return (
    <input
      ref={ref}
      className={`mr-2 px-2 h-c28 rounded-sm outline-none pb-c2 text-white
         bg-transparent border-b-c1 border-solid border-white`}
      value={editValue}
      onChange={(e) => {
        handleOnChange(e);
      }}
      onKeyDown={(e) => handleOnKeyDown(e)}
    />
  );
});
export default EditInputUI;
