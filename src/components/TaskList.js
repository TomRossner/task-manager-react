import Task from "./Task";

const TaskList = ({ tasks, handleCheck, handleDelete, handleEdit }) => {
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
        />
      ))}
    </ul>
  );
};

export default TaskList;
