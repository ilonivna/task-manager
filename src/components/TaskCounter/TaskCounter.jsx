import { useSelector } from "react-redux";
import { selectTasksCount } from "../../redux/selectors";

export const TaskCounter = () => {
  const { active, completed } = useSelector(selectTasksCount);

  return (
    <div>
      <p>Active: {active}</p>
      <p>Completed: {completed}</p>
    </div>
  );
};
