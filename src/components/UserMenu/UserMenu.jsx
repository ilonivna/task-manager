import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { Button } from "../Button/Button";
import css from "./UserMenu.module.css";


export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={css.userMenu}>
            <p>Welcome, {user.name}</p>
            <Button className={css.btn} type="button" onClick={() => dispatch(logout())}>Logout</Button>
        </div>
    );
};