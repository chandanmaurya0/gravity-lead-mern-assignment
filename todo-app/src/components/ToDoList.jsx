import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todo_list, markComplete, deleteTask, addTask, filterTasks }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
      <div style={{ width: "80%", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <div>
            <button onClick={() => filterTasks("all")} style={{ marginRight: "10px" }}>All</button>
            <button onClick={() => filterTasks("completed")} style={{ marginRight: "10px" }}>Completed</button>
            <button onClick={() => filterTasks("pending")}>Pending</button>
          </div>
          <button 
            onClick={addTask} 
            style={{ 
              backgroundColor: "lightblue", 
              padding: "10px", 
              border: "none", 
              cursor: "pointer" 
            }}
          >
            Add New Task
          </button>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "40px" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid lightgray", padding: "10px", textAlign: "center" }}>Index</th>
              <th style={{ border: "1px solid lightgray", padding: "10px", textAlign: "center" }}>Task</th>
              <th style={{ border: "1px solid lightgray", padding: "10px", textAlign: "center" }}>Status</th>
              <th style={{ border: "1px solid lightgray", padding: "10px", textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todo_list.map((todo, index) => (
              <ToDoItem 
                key={index} 
                index={index} 
                todo={todo} 
                markComplete={markComplete} 
                deleteTask={deleteTask} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ToDoList;