import Task from "./Task";

const TaskList = ({ tasks, handleCheck, handleDelete, handleEdit, setTasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </ul>
  );
};

export default TaskList;
