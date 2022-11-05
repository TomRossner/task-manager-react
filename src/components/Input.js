import { useState } from "react";
import "./components.css";
import { AiFillEdit } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

const Input = ({task, handleDelete, tasks}) => {

    const [isReadOnly, setReadOnly] = useState(true);
    const handleEdit = (e) => {
      let input = e.target.parentElement.previousSibling;
      setReadOnly((isReadOnly) => isReadOnly = false)
    }
    const [newTasks, setNewTasks] = useState(tasks);
    const saveNewInputValue = (e, id) => {
        let input = e.target.previousSibling;
        setReadOnly((isReadOnly) => isReadOnly = true)   
        let task = tasks.map((task) => task.id === id ? {...task, task: input.value} : task);
        localStorage.setItem("tasks-list", JSON.stringify(task));
    }

    if(!isReadOnly){
        return (
            <>
            <input readOnly={isReadOnly} defaultValue={task.task} type="text"></input>
            <button className="icon" onClick={(e) => saveNewInputValue(e, task.id)}>Save</button>
            </>
        )   

    }
    else{ 
        return (
            <>
            <input readOnly={isReadOnly} defaultValue={task.task} type="text"></input>
            <span className="icon">
                <AiFillEdit onClick={(e) => handleEdit(e)}/>
            </span>
            <span className="icon" onClick={() => handleDelete(task.id)}>
                <FaRegTrashAlt />
            </span>
            
            </>
        )
    }
}

export default Input;