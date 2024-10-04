import css from "./Task.module.css";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/operations";
import { toggleCompleted } from "../../redux/operations";


export const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id))};

    const handleToggle = () => {
        dispatch(toggleCompleted(task.id))
    }

    return (
        <div>
            <input type="checkbox" className={css.checkbox} onChange={handleToggle} checked={task.completed}/>
            <p>{task.text}</p>
            <button type="button" onClick={handleDelete}>
                <MdDeleteForever size="24"/>
            </button>
        </div>
    );
};