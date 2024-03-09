import { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { PiClockClockwise } from "react-icons/pi";
import { PiClockCounterClockwise } from "react-icons/pi";
import { MdAddCircle } from "react-icons/md";

export interface routeItem {
  path: string;
  icon?: IconType;
  name: string;
}
const routes: routeItem[] = [
  {
    path: "/app/dashboard",
    icon: MdDashboard,
    name: "Dashboard",
  },
  {
    path: "/app/events",
    icon: MdOutlineCalendarMonth,
    name: "Events",
  },
  {
    path: "/app/upcoming-events",
    icon: PiClockClockwise,
    name: "Upcoming Events",
  },
  {
    path: "/app/past-events",
    icon: PiClockCounterClockwise,
    name: "Past Events",
  },
  {
    path: "/app/add-events",
    icon: MdAddCircle,
    name: "Add Events",
  },
];
export default routes;
