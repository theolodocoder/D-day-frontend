import { BsDot, BsSend } from "react-icons/bs";

const colors = [
  "#FF6B6B",
  "#48BB78",
  "#F6E05E",
  "#4299E1",
  "#ED64A6",
  "#FBD38D",
  "#9F7AEA",
  "#63B3ED",
  "#F56565",
  "#38A169",
  "#F6E05E",
  "#4FD1C5",
  "#B794F4",
  "#F6AD55",
  "#63B3ED",
  "#4FD1C5",
  "#9F7AEA",
  "#A0AEC0",
  "#4299E1",
  "#F56565",
];

const EventCard = ({ id }: { id: number }) => {
  const colorIndex = id % colors.length;
  return (
    <div className="flex items-center gap-x-5 bg-[#E3EBF6CC] mt-3  rounded-xl text-black p-[1rem] cursor-pointer">
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-bold`}
        style={{ background: colors[colorIndex] }}
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
