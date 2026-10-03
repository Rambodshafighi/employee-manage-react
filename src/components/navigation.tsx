import { MenuFoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useReducer } from "react";
import { NavLink } from "react-router";

function Navigation() {
  const [menu, dispatch] = useReducer(
    (_: boolean, action: "open" | "close") => action === "open",
    false,
  );

  useEffect(() => {
    if (!menu) return;

    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
    };
  }, [menu]);
  return (
    <div>
      <Button
        onClick={() => dispatch("open")}
        type="primary"
        className="lg:hidden"
        icon={<MenuFoldOutlined />}
      ></Button>
      <div
        onClick={() => dispatch("close")}
        className={`fixed w-full h-dvh bg-black/50 top-0 left-0 ${menu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-opacity lg:hidden`}
        role="button"
      ></div>
      <nav
        className={`shadow rounded flex items-center justify-center flex-col gap-2 fixed left-0 w-2/3 h-dvh bg-white top-0 ${menu ? "translate-x-0" : "-translate-x-full"} not-lg:transition-transform lg:relative lg:w-fit lg:h-fit lg:translate-x-0 lg:flex-row lg:shadow-none lg:bg-transparent *:p-2 *:rounded *:transit`}
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white" : "bg-transparent"
          }
        >
          Employees
        </NavLink>
        <NavLink
          to={"/employee"}
          className={({ isActive }) =>
            isActive ? "bg-blue-500 text-white" : "bg-transparent"
          }
        >
          Manage
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
