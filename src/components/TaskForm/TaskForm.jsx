import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";
import { addTask } from "../../redux/tasks/operations";

export const TaskForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const text = form.elements.text.value;
        if (text !== "") {
            dispatch(addTask(text));
            form.reset();
            return;
        }
        alert('Task text cannot be empty! Please, type something')
        
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                className={css.field}
                type="text"
                name="text"
                placeholder="Enter task text here.."
            />
            <Button type="submit">Add task</Button>
        </form >
    );
};