import css from "./Task.module.css";
import { MdDeleteForever } from "react-icons/md";


export const Task = ({ task }) => {
    return (
        <div>
            <input type="checkbox" className={css.checkbox} checked={task.completed} />
            <p>{task.text}</p>
            <button>
                <MdDeleteForever />
            </button>
        </div>
    );
};