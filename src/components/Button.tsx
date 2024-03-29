import { IconType } from "react-icons";

interface ButtonProps {
  content: string;
  variant?: "solid" | "transparent" | "dark";
  icon?: IconType;
  other?: string;
  type?: "button" | "submit" | "reset";
}
export default function Button({
  content,
  type,
  variant,
  icon,
  other,
}: ButtonProps) {
  return (
    <button
      type={type || "button"}
      className={`
      ${icon && "flex items-center gap-x-5"}
      h-14 w-48 px-4 py-2 rounded-full ${
        variant == "transparent"
          ? "bg-transparent border border-white text-white"
          : "bg-[#05F900]"
      } text-black font-semibold ${other} font-bold`}
    >
      {icon && icon({ size: 28, color: "#505357" })}
      {content}
    </button>
  );
}
