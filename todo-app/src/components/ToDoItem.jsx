import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDoItem({ todo, index, markComplete, deleteTask }) {
  return (
    <tr>
      <td style={{ border: "1px solid lightgray", padding: "10px", textAlign: "center" }}>{index}</td>
      <td style={{ border: "1px solid lightgray", padding: "10px", textAlign: "center" }}>{todo.task}</td>
      <td style={{ border: "1px solid lightgray", padding: "10px", textAlign: "center" }}>
        <span 
          style={{ 
            backgroundColor: todo.completed ? "lightgreen" : "lightyellow", 
            borderRadius: "10px", 
            padding: "5px" 
          }}
        >
          {todo.completed ? "Completed" : "Pending"}
        </span>
      </td>
      <td style={{ border: "1px solid lightgray", padding: "10px", textAlign: "center" }}>
        {!todo.completed && (
          <button 
            onClick={() => markComplete(todo.id)} 
            style={{ backgroundColor: "lightgreen", marginRight: "10px" }}
          >
            Mark Complete
          </button>
        )}
        <button 
          onClick={() => deleteTask(todo.id)} 
          style={{ backgroundColor: "lightcoral", color: "white" }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
}

export default ToDoItem;
