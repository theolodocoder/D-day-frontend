import { FC } from "react";
import Dashboard from "../pages/Dashboard";
import TodaysEvent from "../pages/Event";
import UpcomingEvents from "../pages/UpcomingEvents";
import PastEvents from "../pages/PastEvents";
import AddEvents from "../pages/AddEvents";

interface routeItem {
  path: string;
  component: FC;
}

const routes: routeItem[] = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/events",
    component: TodaysEvent,
  },
  {
    path: "/upcoming-events",
    component: UpcomingEvents,
  },
  {
    path: "/past-events",
    component: PastEvents,
  },
  {
    path: "/add-events",
    component: AddEvents,
  },
];

export default routes;
