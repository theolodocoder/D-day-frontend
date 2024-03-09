import { MdEditCalendar } from "react-icons/md";

export default function Upload() {
  return (
    <div className="bg-[#E3EBF680] w-full h-96 flex justify-center items-center">
      <div>
        <MdEditCalendar size={30} />
        <h3>Upload Events</h3>
        <p>Add New Events,Birthday,etc...</p>
      </div>
    </div>
  );
}
