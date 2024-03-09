import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import EventCard from "./components/EventCard";
import Button from "../../components/Button";
import { MdAddCircle } from "react-icons/md";

const Event = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (expanded) {
      inputRef.current?.focus();
    }
  }, [expanded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex gap-x-[20%] w-full">
      <div className="w-[50%] flex flex-col gap-y-20">
        <div className="flex gap-x-10 items-center">
          <div>
            <h1 className="text-5xl font-semibold mb-2">Good Morning,</h1>
            <p className="font-extralight">
              Idris, Hope you’re having a great day
            </p>
          </div>
          <img src="/tree.svg" alt="tree-svg" width={100} />
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-[24px] mb-1 font-semibold">Todays Events,</h1>
              <p className="font-extralight text-sm">
                You have (19) events today
              </p>
            </div>
            {/* search icon */}
            <div className="flex items-center gap-x-3">
              {expanded ? (
                <input
                  ref={expanded && inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={handleChange}
                  className="bg-transparent w-80 h-12 px-2 border-b border-b-gray-200 text-white outline-none"
                  placeholder="Search..."
                />
              ) : null}
              <div
                className="w-12 h-12 rounded-full bg-[#BFC4CB] flex justify-center items-center cursor-pointer"
                onClick={handleToggleExpand}
              >
                <FiSearch fontSize={"24px"} color="black" fontWeight={800} />
              </div>
            </div>
          </div>
          <div className="mt-10">
            {Array(5)
              .fill(null)
              .map((_, idx) => (
                <EventCard key={idx} id={idx} />
              ))}
          </div>
          <div className="flex w-full justify-end mt-4 cursor-pointer">
            <a>View More</a>
          </div>
        </div>
      </div>
      <div className="">
        <Button content={"Add Event"} icon={MdAddCircle} other="bg-white" />
      </div>
    </div>
  );
};

export default Event;
