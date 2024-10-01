import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";

export const TaskFrom = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;


        form.reset();
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