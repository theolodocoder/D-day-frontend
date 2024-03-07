import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-black w-screen h-screen relative text-white overflow-hidden">
      <div className="w-[90%] mx-auto h-full">
        <nav className="w-full py-10">
          <ul className="flex gap-x-10 items-center h-full py-5">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </nav>
        <main className="flex justify-between items-center w-full h-[70%] ">
          <div className="">
            <div className="mb-10 font-semibold text-8xl">
              <h1 className="">Welcome to</h1>
              <h1 className="text-[#05f900] italic">D-day</h1>
            </div>
            <div className="flex gap-x-3">
              <button className="border border-white h-14 w-40 px-4 py-2 rounded-full">
                <Link to={"/login"}>Login</Link>
              </button>
              <button className="h-14 w-40 px-4 py-2 rounded-full bg-[#05F900] text-black font-semibold">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -left-20 top-14 w-[450px] h-[450px] border-2 border-[#05f900] rounded-full ring-2 ring-[#05f900] ring-offset-black ring-offset-[30px]"></div>
            <img
              src="/clock.svg"
              alt="clock-image"
              className="tranform scale-90"
            />
          </div>
        </main>
        <footer>
          <p className="absolute bottom-10 right-10 cursor-pointer text-sm text-shadow z-10 opacity-70">
            Privacy & Policy
          </p>
          <div className="absolute -bottom-[600px] -right-[600px] w-[1088px] h-[1177px] rounded-full">
            <div className="absolute inset-0 ">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-green-700 filter blur-[300px] transform rotate-40 rounded-full"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
