import { HiCheck } from "react-icons/hi";
import Input from "./Input";

const Task = ({task, handleCheck, handleDelete, tasks }) => {
    const taskClass = task.isCompleted ? "task completed" : "task";
    return (
        <li className={taskClass}>
          <span className="icon" onClick={() => handleCheck(task.id)}>
            <HiCheck />
          </span>
          <Input tasks={tasks} task={task} handleDelete={handleDelete} value={task.task}/>
        </li>
    )
}

export default Task;