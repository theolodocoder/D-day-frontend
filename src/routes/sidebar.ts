export interface routeItem {
  path: string;
  icon?: React.ReactNode;
  name: string;
}
const routes: routeItem[] = [
  {
    path: "/app/dashboard",
    name: "Dashboard",
  },
  {
    path: "/app/todays-events",
    name: "Todays Events",
  },
  {
    path: "/app/upcoming-events",
    name: "Upcoming Events",
  },
  {
    path: "/app/past-events",
    name: "Past Events",
  },
  {
    path: "/app/add-events",
    name: "Add Events",
  },
];
export default routes;
