import { Layout } from "./Layout/Layout";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";

function App() {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList/>
  </Layout>
);
}

export default App;
