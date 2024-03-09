import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  searchTerm: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({
  searchTerm,
  handleChange,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (expanded) {
      inputRef.current?.focus();
    }
  }, [expanded]);

  return (
    <div className="flex items-center gap-x-3">
      {expanded ? (
        <input
          ref={inputRef}
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
  );
}
