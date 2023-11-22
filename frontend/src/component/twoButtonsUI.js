export default function TwoButtonsUI({ handleClickEdit, handleClickDel }) {
  return (
    <div
      className="relative  flex justify-end gap-2
    w-c120 h-c28 items-center
    hover:overflow-visible  "
    >
      <button
        className="  overflow-hidden bg-black222/40  transition-all text-black
          hover:bg-black222 text-white px-4 py-c2 rounded-sm 
          hover:bg-black222 bg-bg-black/50"
        onClick={handleClickEdit}
      >
        Edit
      </button>
      <button
        className="  overflow-hidden bg-black222/40  transition-all text-black
          hover:bg-black222 text-white px-4 py-c2 rounded-sm 
          hover:bg-black222 bg-bg-black/50"
        onClick={handleClickDel}
      >
        Del
      </button>
    </div>
  );
}
