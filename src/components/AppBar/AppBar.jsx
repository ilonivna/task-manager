import { StatusFilter } from "../StatusFilter/StatusFilter";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import css from "./AppBar.module.css";


export const AppBar = () => {
    return (
        <header>
            <section>
                <h2 className={css.header}>Tasks</h2>
                <TaskCounter/>
            </section>

            <section >
                <h2 className={css.header}>Filter by status</h2>
                <StatusFilter/>
                </section>
        </header>
    )
}