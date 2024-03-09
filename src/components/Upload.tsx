import { MdEditCalendar } from "react-icons/md";

export default function Upload() {
  return (
    <div className="bg-[#E3EBF680] w-full h-96 flex justify-center items-center rounded-xl text-black cursor-pointer">
      <div className="text-center">
        <MdEditCalendar size={50} className="mx-auto" />
        <h3 className="mt-2 font-semibold text-lg mb-1">Upload Events</h3>
        <p className="text-sm">Add New Events,Birthday,etc...</p>
      </div>
    </div>
  );
}
