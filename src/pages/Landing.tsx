import { Link } from "react-router-dom";
import Clock from "../components/Clock";
import Button from "../components/Button";
import { useState } from "react";
import Auth from "../features/auth";

export default function Landing() {
  const [isSlide, setIsSlide] = useState(true);
  return (
    <div className="bg-black w-screen h-screen relative text-white overflow-hidden">
      {isSlide && <Auth />}
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
              <Button content="Login" variant="transparent" />
              <Button content="Get Started" />
            </div>
          </div>
          <Clock size="md" />
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
