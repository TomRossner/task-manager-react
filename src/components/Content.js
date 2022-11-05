import "./components.css";
import "./Icons.css";
import TaskList from "./TaskList";

const Tasks = ({ tasks, handleCheck, handleDelete, handleEdit, setTasks }) => {
  return (
    <div className="tasks-container">
      {tasks.length ? (
        <TaskList
          tasks={tasks}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setTasks={setTasks}
        />
      ) : (
        <p>You have no tasks</p>
      )}
    </div>
  );
};

export default Tasks;
