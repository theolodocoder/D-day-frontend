const Clock = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -left-20 top-14 w-[450px] h-[450px] border-2 border-[#05f900] rounded-full ring-2 ring-[#05f900] ring-offset-black ring-offset-[30px]"></div>
      <img src="/clock.svg" alt="clock-image" className="tranform scale-90" />
    </div>
  );
};

export default Clock;
