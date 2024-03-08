import { LiaSignOutAltSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import routes from "../routes/sidebar";
import ProfileAvatar from "./ProfileAvatar";

const Sidebar = () => {
  return (
    <div className="w-32 h-full bg-black text-sm py-10 flex text-gray-300 justify-center">
      <ul className="mx-auto text-center flex flex-col gap-y-16 min-h-full">
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
                      isActive
                        ? "font-semibold bg-none text-sm text-[#05f900]"
                        : "font-normal"
                    } focus:bg-none`
                  }
                >
                  <div className="flex flex-col items-center gap-y-2 mt-10">
                    {route?.icon && route.icon({ size: 24 })}
                    <p className="text-[11px]">{route.name}</p>
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
                <div className="flex flex-col items-center gap-y-2 mt-10">
                  <LiaSignOutAltSolid className="text-xl" />
                  Sign out
                </div>
              </NavLink>
            </li>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
