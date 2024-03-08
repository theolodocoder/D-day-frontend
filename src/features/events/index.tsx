import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import EventCard from "./components/EventCard";

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
          <div>
            {/* {events.map((eve) => (
            <EventCard key={eve.id}  />
          ))} */}
          </div>
        </div>
      </div>
      <div className="bg-red-400">Left</div>
    </div>
  );
};

export default Event;