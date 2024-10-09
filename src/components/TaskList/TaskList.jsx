import { Task } from "../Task/Task";
import { useSelector } from "react-redux";
import { selectVisibleTasks } from "../../redux/tasks/selectors";
import css from "./TaskList.module.css";

export const TaskList = () => {
   const tasks = useSelector(selectVisibleTasks);

    return (
        <div className={css.container}>
        <h4>Your tasks list</h4>
        <ul className={css.list}>
            {tasks.map((task) => (
                <li className={css.listItem} key={task.id}>
                    <Task task={task} />
                </li>))}
        </ul>
        </div>
    );
};