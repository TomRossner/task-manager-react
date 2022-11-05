import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks-list")) || []);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks-list', JSON.stringify(tasks));
  }, [tasks])

  const addTask = (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = {id, isCompleted: false, task};
    const tasksList = [...tasks, myNewTask];
    setTasks(tasksList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    setNewTask('');
    addTask(newTask);
  }

  const handleCheck = (id) => {
    const tasksList = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(tasksList);
  };

  const handleDelete = (id) => {
    const tasksList = tasks.filter((task) => task.id !== id);
    setTasks(tasksList);
  };

  return (
    <div className="App">
      <Header title="Task Manager"/>
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <Content
        tasks={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
