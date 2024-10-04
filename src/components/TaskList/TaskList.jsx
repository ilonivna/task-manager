import { Task } from "../Task/Task";
import { useSelector } from "react-redux";
import { selectVisibleTasks } from "../../redux/selectors";
import css from "./TaskList.module.css";

export const TaskList = () => {
   const tasks = useSelector(selectVisibleTasks);

    return (
        <div>
            <h4>Your tasks list</h4>
        <ul>
            {tasks.map((task) => (
                <li className={css.listItem} key={task.id}>
                    <Task task={task} />
                </li>))}
        </ul></div>
    );
};