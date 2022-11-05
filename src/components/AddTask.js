import { GoPlus } from "react-icons/go";

const AddTask = ({ newTask, setNewTask, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="I need to..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add" type="submit" onClick={handleSubmit}>
        <span>
          <GoPlus />
        </span>
      </button>
    </form>
  );
};

export default AddTask;
