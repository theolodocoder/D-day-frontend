import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import Upload from "../../components/Upload";
import EventCard from "./components/EventCard";

const Event = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
            <div>
              <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
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

      {/* Lhs */}
      <div className="w-[30%]">
        <Button content={"Add Event"} icon={MdAddCircle} other="bg-white" />
        {/*  Upload component */}
        <div className="mt-10">
          <Upload />
        </div>
      </div>
    </div>
  );
};

export default Event;
