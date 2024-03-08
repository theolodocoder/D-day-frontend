import { BsDot, BsSend } from "react-icons/bs";

const colors = ["red", "gray", "purple", "pink", "lightblue"];

const EventCard = ({ id }) => {
  const getRandColor = () => {
    const rand: number = Math.floor(Math.random() * colors.length - 1);
    return colors[rand];
  };

  // console.log(getRandColor());
  return (
    <div className="flex items-center gap-x-5 bg-[#E3EBF6CC] mt-5 rounded-xl text-black p-4 cursor-pointer">
      <div
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-${colors[id]}-600 text-white font-bold`}
      >
        SE
      </div>
      <div>
        <h3 className="font-semibold text-lg">
          <span>John Doe </span>
          <span>Birthday</span>
        </h3>
        <div className="flex gap-x-3 text-sm items-center">
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
