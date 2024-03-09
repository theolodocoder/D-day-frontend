import { BsDot, BsSend } from "react-icons/bs";

const colors = ["red", "gray", "purple", "pink", "lightblue"];

const EventCard = ({ id }: { id: number }) => {
  return (
    <div className="flex items-center gap-x-5 bg-[#E3EBF6CC] mt-3  rounded-xl text-black p-[1rem] cursor-pointer">
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full bg-${colors[id]}-400 text-white font-bold`}
      >
        SE
      </div>
      <div>
        <h3 className="font-semibold text-[16px]">
          <span>John Doe </span>
          <span>Birthday</span>
        </h3>
        <div className="flex gap-x-3 text-xs items-center">
          <p>Today</p>
          <BsDot />
          <div className="flex items-center gap-x-2">
            <BsSend size={10} />
            Sent
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
