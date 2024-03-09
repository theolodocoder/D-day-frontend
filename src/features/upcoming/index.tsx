import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import EventCard from "../events/components/EventCard";
import EventDetails from "../../components/EventDetails";

const UpcomingEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex gap-x-[10%] w-full h-full">
      <div className="w-[60%] flex flex-col gap-y-5 h-full">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-semibold mb-2">Upcoming Events,</h1>
            <p className="font-extralight">
              Usman, Hope you’re having a great day
            </p>
          </div>
          <div>
            <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
          </div>
        </div>
        {/* upcoming events */}
        <div className="mt-5">
          {Array(7)
            .fill(null)
            .map((_, idx) => (
              <EventCard key={idx} id={idx} />
            ))}
        </div>
        <div className="flex w-full justify-end mt-4 cursor-pointer">
          <a>View More</a>
        </div>
      </div>
      <div className="w-[30%] flex items-center">
        <EventDetails type="upcoming" />
      </div>
    </div>
  );
};

export default UpcomingEvents;
