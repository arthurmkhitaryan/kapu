import { DashboardLayout } from "../components/DashboardLayout";
import { Home } from "../views/Home";
import { Basket } from "../views/Basket";

const DashboardRoutes = [
  {
    path: "/",
    name: "Dashboard",
    exact: true,
    element: <Home />,
    meta: {
      layout: DashboardLayout,
    },
  },
  {
    path: "/basket",
    name: "Dashboard",
    exact: true,
    element: <Basket />,
    meta: {
      layout: DashboardLayout,
    },
  },
  {
    path: "/orders",
    name: "Dashboard",
    exact: true,
    element: <Basket />,
    meta: {
      layout: DashboardLayout,
    },
  },
];

export default DashboardRoutes;
