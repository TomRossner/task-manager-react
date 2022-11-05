import "./components.css";
import "./Icons.css";
import TaskList from "./TaskList";

const Tasks = ({ tasks, handleCheck, handleDelete, handleEdit }) => {
  return (
    <div className="tasks-container">
      {tasks.length ? (
        <TaskList
          tasks={tasks}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ) : (
        <p>You have no tasks</p>
      )}
    </div>
  );
};

export default Tasks;
