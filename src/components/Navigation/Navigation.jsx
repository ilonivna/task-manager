import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';


export default function Navigation() {
 const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <NavLink to="/">
            Welcome</NavLink>
            {isLoggedIn && (
                <NavLink to="/tasks">
                    My Tasks
                </NavLink>
            )}
        </nav>
    );
}