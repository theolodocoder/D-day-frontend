import { useState, useEffect } from "react";
import { updateItem } from "..";
import { CgAsterisk } from "react-icons/cg";

interface InputGroupProps {
  label: string;
  defaultValue: string;
  required?: boolean;
  type: "text" | "select" | "date" | "email";
  updateType: string;
  placeholder?: string;
  options?: string[]; // Add options prop for select inputs
  updateFormValue: ({ updateType, value }: updateItem) => void;
}

export default function InputGroup({
  label,
  defaultValue,
  type,
  required,
  updateType,
  updateFormValue,
  placeholder,
  options, // Receive options prop
}: InputGroupProps) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValue(e.target.value);
    updateFormValue({ updateType, value: e.target.value });
  };

  // Render select input if type is "select", otherwise render text input
  const renderInput = () => {
    if (type === "select" && options) {
      return (
        <select
          id={label.toLowerCase()}
          value={value}
          onChange={handleChange}
          className="w-full p-4 bg-white focus:bg-white border-none rounded-3xl text-black placeholder:text-gray-600 placeholder:text-xs"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          type={type}
          id={label.toLowerCase().trim()}
          value={value}
          placeholder={placeholder || ""}
          onChange={handleChange}
          className="w-full p-4 bg-white focus:bg-white border-none rounded-3xl text-black placeholder:text-gray-600"
        />
      );
    }
  };

  return (
    <div className="w-full">
      <label
        htmlFor={label.toLowerCase().trim()}
        className="text-white text-lg font-semibold"
      >
        <p className="mb-2 flex items-center gap-x-2">
          {label}
          {required ? (
            <p className="text-red-500">
              <CgAsterisk />
            </p>
          ) : (
            <p className=""> (Optional)</p>
          )}
        </p>
        {renderInput()}
      </label>
    </div>
  );
}
