import css from "./Task.module.css";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/operations";
 import { toggleCompleted } from "../../redux/tasks/operations";



export const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id))};

    const handleToggle = () => {
        dispatch(toggleCompleted(task))
     }

    return (
        <div className={css.container}>
            <input type="checkbox" className={css.checkbox} onChange={handleToggle} checked={task.completed}/>
            <p className={css.text}>{task.text}</p>
            <button type="button" onClick={handleDelete} className={css.btn}>
                <MdDeleteForever size="24"/>
            </button>
        </div>
    );
};