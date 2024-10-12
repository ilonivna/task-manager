import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from "clsx";
import css from "./Navigation.module.css";

const getLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive)
}


export default function Navigation() {
 const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <ul className={css.list}>
                <li><NavLink to="/" className={getLinkClass}>
            Welcome</NavLink></li>
            
            {isLoggedIn && (
                <li>
                <NavLink to="/tasks" className={getLinkClass}>
                    My Tasks
                </NavLink></li>
            )}
            </ul>
        </nav>
    );
}