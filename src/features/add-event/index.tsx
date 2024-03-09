import { useState } from "react";
import AddForm from "./components/AddForm";
import Clock from "../../components/Clock";

export interface eventItem {
  firstname: string;
  lastname: string;
  eventDate: string;
  email: string;
  sex: "male" | "female";
  religon: string;
  phoneNumber: string;
  category: string;
}

export interface updateItem {
  updateType: string;
  value: string;
}

const AddEvent = () => {
  const INITIAL_EVENT_OBJ: eventItem = {
    firstname: "",
    lastname: "",
    eventDate: "",
    email: "",
    sex: "male",
    religon: "",
    phoneNumber: "",
    category: "",
  };

  const [eventObj, setEventObj] = useState<eventItem>(INITIAL_EVENT_OBJ);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleSubmit = () => {
    return;
  };
  const updateFormValue = ({ updateType, value }: updateItem) => {
    setErrorMessage("");
    setEventObj({ ...eventObj, [updateType]: value });
  };
  return (
    <div className="flex gap-x-[10%] w-full relative">
      <div className="w-[60%] flex flex-col gap-y-8">
        <div>
          <h1 className="text-5xl font-semibold mb-2">Add a new Event</h1>
          <p className="font-extralight">Fill the form below</p>
        </div>
        {/* Add new event form */}
        <AddForm
          handleSubmit={handleSubmit}
          handleChange={updateFormValue}
          formData={eventObj}
        />
      </div>
      <div className="w-[30%] flex items-center">
        <div className="absolute -right-[300px]">
          <Clock size="sm" />
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
