import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/employees"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Employees
      </NavLink>
    </nav>
  );
}

export default Navigation;