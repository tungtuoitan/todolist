
export default function InputSectionUI(props) {
  const { handleOnChange, value, handleEnter,isEditMode } = props;
  return (
    <div className={`first-input-ui flex justify-center 
    ${isEditMode ? 'mt-c-33':''}`}>
      <input
        className="border3 mr-2 px-2 h-c28 rounded-sm
        outline-none pb-c2 text-black222"
        value={value}
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
      <button
        className=" enter-btn  hover:border-white border-black222 border-c1 border-solid 
       bg-black text-white px-4 py-c2  rounded-sm mr-2"
        onClick={handleEnter}
      >
        Enter
      </button>
    </div>
  );
}
