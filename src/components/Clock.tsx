interface ClockProps {
  size: "lg" | "md" | "sm";
}
const Clock = ({ size }: ClockProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -left-[60px] top-14 w-[430px] h-[430px] border-2 border-[#05f900] rounded-full"></div>
      <div className="absolute inset-0 -left-[100px] top-[30px] w-[480px] h-[480px] border-2 border-[#05f900] rounded-full"></div>
      <img src="/clock.svg" alt="clock-image" className={"tranform scale-90"} />
    </div>
  );
};

export default Clock;
