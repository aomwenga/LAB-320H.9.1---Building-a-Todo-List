import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  // State for the list of todos
  const [todos, setTodos] = useState([
    { id: 1, title: "Tell Everyone About Kobe", completed: false },
    { id: 2, title: "Correct Lebron fans", completed: false },
  ]);

  // State for the new todo input
  const [newTodo, setNewTodo] = useState("");

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        { id: Date.now(), title: newTodo, completed: false },
        ...todos,
      ]);
      setNewTodo(""); // Clear the input field after adding
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
