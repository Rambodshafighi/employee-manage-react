import { createBrowserRouter } from "react-router";
import App from "../App";
import Employee from "../pages/employee";
import CreateEmployee from "../pages/employee/create.employee";
import EditEmployee from "../pages/employee/edit.employee";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "employee",
        Component: Employee,
        children: [
          {
            index: true,
            Component: CreateEmployee,
          },
          {
            path: "edit/:id",
            Component: EditEmployee,
          },
        ],
      },
    ],
  },
]);
