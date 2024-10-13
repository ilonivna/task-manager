import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { TaskList } from "../../components/TaskList/TaskList";
import Loader from "../../components/Loader/Loader";
import { selectVisibleTasks } from "../../redux/filter/selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/tasks/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/tasks/operations";
import { StatusFilter } from "../../components/StatusFilter/StatusFilter";



export default function HomePage() {
const visibleTasks = useSelector(selectVisibleTasks);
const isLoading = useSelector(selectIsLoading);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchTasks());
}, [dispatch]);

    return (
        <div>
            <DocumentTitle>Tasks</DocumentTitle>
                <TaskForm />
                <StatusFilter/>
                {isLoading && <Loader/>}
                {visibleTasks.length === 0 ? <p>No tasks yet, start by adding a few!</p> :                 <TaskList/>}

        </div>
    )
}