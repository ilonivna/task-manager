import { useSelector } from "react-redux";
import { selectTasksCount } from "../../redux/tasks/selectors";
import css from "./TaskCounter.module.css";


export const TaskCounter = () => {
  const { active, completed } = useSelector(selectTasksCount);

  return (
    <div className={css.wrapper}>
      <p>Active: {active}</p>
      <p>Completed: {completed}</p>
    </div>
  );
};
