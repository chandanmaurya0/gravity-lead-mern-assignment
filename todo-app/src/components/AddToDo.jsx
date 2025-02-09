import React, { useState } from "react";

function AddToDo({ addTodo, closeModal }) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    addTodo(task);
    setTask("");
    closeModal();
  };

  return (
    <div className="modal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="modal-content" style={{ textAlign: 'center' }}>
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Add New Task</h2>
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
            style={{ borderWidth: '1px', borderRadius: '4px', padding: '8px', width: '80%' }}
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <button onClick={handleSubmit} style={{ backgroundColor: 'lightblue', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;