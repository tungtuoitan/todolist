import EditSection from "./editSection";
import InputSection from "./inputSection";

export default function InputAndEdit() {
  // khi click edit thì editSection sẽ hiển thị
  return (
    <div className={`overflow-hidden h-c30 mt-4 mb-8  shrink-0`}>
      <InputSection />
      <EditSection />
    </div>
  );
}
