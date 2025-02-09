import { useState, useEffect } from "react";
import "./App.css";

import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [
      {
        id: 1,
        task: "Sample Task 1",
        completed: false,
      },
    ];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");


//  fetch user id from local storage
  useEffect(() => {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = `user-${Date.now()}`;
      localStorage.setItem("userId", userId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // handler to add Todo item
  const addTodo = (task) => {
    // create a unique id based on current timestamp
    const id = Date.now();
    // create a new task object
    let new_task = { id, task, completed: false };

    // add the new task to the todos
    setTodos([...todos, new_task]);

    // store the new task using the provided API
    fetch('https://dummyjson.com/todos/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo: task,
        completed: false,
        userId: localStorage.getItem("userId"),
      })
    })
    .then(res => res.json())
    .then(console.log);
  };

  // handle to mark a task as completed
  const markComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // handle to delete a task
  const deleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // Handle filter tasks
  const filterTasks = (status) => {
    setFilter(status);
  };

  const getFilteredTasks = () => {
    if (filter === "all") {
      return todos;
    }
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }
  };

  return (
    <>
      <header
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        <div>ToDo App</div>
      </header>

      {isModalOpen && <AddToDo addTodo={addTodo} closeModal={closeModal} />}

      <div className="App">
        <ToDoList
          todo_list={getFilteredTasks()}
          markComplete={markComplete}
          deleteTask={deleteTask}
          addTask={openModal}
          filterTasks={filterTasks}
        />
      </div>
    </>
  );
}

export default App;
