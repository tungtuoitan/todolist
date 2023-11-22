import WhiteDot from "./whiteDot";

export default function Content({ item }) {
  return (
    <div
      className="content-item breakwords mr-4 border-white/50 hover:border-white border-solid border-b-c1 
        flex justify-center items-end gap-2 outline-none"
    >
      {item}
    </div>
  );
}
