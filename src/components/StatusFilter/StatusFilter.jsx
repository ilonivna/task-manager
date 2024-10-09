import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import css from "./StatusFilter.module.css";
import { setStatusFilter } from "../../redux/filter/slice";
import { selectStatusFilter } from "../../redux/tasks/selectors";
import { statusFilters } from "../../redux/filter/constants";
import { selectTasksCount } from "../../redux/tasks/selectors";



export const StatusFilter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(selectStatusFilter);

    const { active, completed } = useSelector(selectTasksCount);

    const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

    return (
        <div className={css.wrapper}>
            <Button selected={filter === statusFilters.all} onClick={() => handleFilterChange(statusFilters.all)}>All ({active + completed})</Button>

            <Button selected={filter === statusFilters.active} onClick={() => handleFilterChange(statusFilters.active)}>Active ({active})</Button>
            <Button selected={filter === statusFilters.completed} onClick={() => handleFilterChange(statusFilters.completed)}>Completed ({completed})</Button>
        </div>
    );
};