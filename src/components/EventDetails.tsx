import { useState } from "react";
import { BsDot, BsSend } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";

interface EventDetailsProps {
  type: "upcoming" | "past";
}
export default function EventDetails({ type }: EventDetailsProps) {
  const [message, setMessage] = useState(
    "Birthday message lorem ispop hewba lorem waninling dninn bujumind wans Birthday message lorem ispop hewba lorem nomode."
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-full relative h-[534px] bg-[#E3EBF6CC] rounded-bl-3xl rounded-br-3xl flex justify-center items-center text-black mt-10">
      <div className="w-52 h-52 rounded-full absolute -top-28 left-1/2 transform -translate-x-1/2 bg-gray-400 flex items-center justify-center font-bold text-6xl">
        SE
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-lg text-center font-semibold">Idiris Birthday</h1>
        <div className="flex gap-x-3 text-xs items-center">
          <p className="text-green-500">Today</p>
          <BsDot />
          <div className="flex items-center gap-x-2 text-orange-400">
            <BsSend size={10} />
            Pending
          </div>
        </div>
        {/* Message box */}
        <div className="w-[80%] h-[120px] relative border border-[#C8C8C8] rounded-xl mt-5">
          <textarea
            name="message"
            id="message"
            value={message}
            className="w-full h-full bg-transparent appearance-none border-none overflow-hidden outline-none p-5"
            contentEditable="false"
            onChange={handleChange}
          ></textarea>
          {type == "upcoming" && (
            <div className="absolute right-0 -bottom-4 w-8 h-8 rounded-full flex items-center justify-center bg-[#049201] text-white">
              <BsPencil />
            </div>
          )}
          <div className="w-full flex justify-end mt-10 cursor-pointer">
            <FaRegTrashAlt color="red" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
