import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { TaskList } from "../../components/TaskList/TaskList";
import { Layout } from "../../components/Layout/Layout";
import { AppBar } from "../../components/AppBar/AppBar";
import { selectVisibleTasks } from "../../redux/selectors";
import { useSelector } from "react-redux";



export default function HomePage() {
const visibleTasks = useSelector(selectVisibleTasks);

    return (
        <div>
            <DocumentTitle>Tasks</DocumentTitle>
            <Layout>
                <AppBar />
                <TaskForm />
                {/* {isLoading && <Loader/> */}
                {visibleTasks.length > 0 ? <p>Tasks were fetched for you</p> : <p>No tasks yet, start by adding a few!</p>}
                <TaskList/>
            </Layout>
        </div>
    )
}