import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export const AuthNav = () => {
  return (
    <nav>
      <ul className={css.list}>
        <li>
          <NavLink to="/register" className={getLinkClass}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={getLinkClass}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
