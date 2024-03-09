import { eventItem, updateItem } from "..";
import Button from "../../../components/Button";
import FormGroup from "./FormGroup";
import InputGroup from "./InputGroup";

interface AddFormProps {
  handleSubmit: () => void;
  handleChange: ({ updateType, value }: updateItem) => void;
  formData: eventItem;
}
export default function AddForm({
  handleSubmit,
  handleChange,
  formData,
}: AddFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup
          type="text"
          updateFormValue={handleChange}
          defaultValue={formData.firstname}
          placeholder="Firstname"
          label="First Name"
          updateType="firstname"
          required
        />
        <InputGroup
          type="text"
          updateFormValue={handleChange}
          defaultValue={formData.lastname}
          placeholder="Lastname"
          label="Last Name"
          updateType="lastname"
        />
      </FormGroup>
      <FormGroup>
        <InputGroup
          type="date"
          updateFormValue={handleChange}
          defaultValue={formData.eventDate}
          placeholder="Enter event date"
          label="Event Date"
          updateType="eventDate"
          required
        />
        <InputGroup
          type="email"
          updateFormValue={handleChange}
          defaultValue={formData.email}
          placeholder="Email"
          label="Email"
          updateType="email"
          required
        />
      </FormGroup>
      <FormGroup>
        <InputGroup
          type="select"
          options={["male", "female"]}
          defaultValue={formData.sex}
          placeholder="Gender"
          label="Gender"
          updateFormValue={handleChange}
          updateType="sex"
        />
        <InputGroup
          type="select"
          options={["christian", "muslim", "hindu"]}
          defaultValue={formData.religon}
          placeholder="Religon"
          label="Religon"
          updateFormValue={handleChange}
          updateType="religon"
        />
      </FormGroup>
      <FormGroup>
        <InputGroup
          type="text"
          updateFormValue={handleChange}
          defaultValue={formData.phoneNumber}
          placeholder="Phone Number"
          label="Phone Number"
          updateType="phoneNumber"
          required
        />
        <InputGroup
          type="select"
          options={["birthday", "anniverseray", "others"]}
          defaultValue={formData.category}
          placeholder="Event Category"
          label="Event Category"
          updateFormValue={handleChange}
          updateType="category"
          required
        />
      </FormGroup>
      <div className="mt-10">
        <Button
          variant="solid"
          content="Add Event"
          other="bg-black text-white"
        />
      </div>
    </form>
  );
}
