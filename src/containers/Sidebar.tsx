import { PiSquaresFour } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../routes/sidebar";
import ProfileAvatar from "./ProfileAvatar";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="w-36 h-full bg-black text-sm py-10 flex">
      <ul className="mx-auto text-center flex flex-col gap-y-16">
        <li>
          <ProfileAvatar />
        </li>
        <li className="flex flex-col h-full justify-between">
          <div>
            {routes.map((route, k) => (
              <li key={k}>
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "font-semibold bg-none" : "font-normal"
                    } focus:bg-none`
                  }
                >
                  <div className="flex flex-col items-center gap-y-2 mt-10">
                    <PiSquaresFour className="text-lg" />
                    <p className="text-xs">{route.name}</p>
                  </div>
                  {/* {location.pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    ></span>
                  ) : null} */}
                </NavLink>
              </li>
            ))}
          </div>
          <div>
            <li>
              <NavLink
                end
                to={"/sign-out"}
                className={({ isActive }) =>
                  `${
                    isActive ? "font-semibold bg-none" : "font-normal"
                  } focus:bg-none`
                }
              >
                Sign out
              </NavLink>
            </li>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
