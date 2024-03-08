import { FiSearch } from "react-icons/fi";
import EventList from "./components/EventList";
// import { useFetchData } from "../../hooks/useFetchData";

const Event = () => {
  return (
    <div className="flex gap-x-[10%] w-full">
      <div className="w-[60%] flex flex-col gap-y-32">
        <div className="flex gap-x-10 items-center">
          <div>
            <h1 className="text-5xl font-semibold mb-3">Good Morning,</h1>
            <p className="font-extralight">
              Idris, Hope you’re having a great day
            </p>
          </div>
          <img src="/tree.svg" alt="tree-svg" width={100} />
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-[22px] mb-1 font-semibold">Good Morning,</h1>
              <p className="font-extralight text-[12px]">
                Idris, Hope you’re having a great day
              </p>
            </div>
            {/* search icon */}
            <div className="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center cursor-pointer">
              <FiSearch fontSize={"24px"} color="black" fontWeight={800} />
            </div>
          </div>
          <EventList />
        </div>
      </div>
      <div className="bg-red-400">Left</div>
    </div>
  );
};

export default Event;
