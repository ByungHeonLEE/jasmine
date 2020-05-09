import React, { useState } from "react";
import Todo from "./@types/todo";
import TodoTitle from "./components/TodoTitle";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (content: string) => {
    const newTodo: Todo = {
      id: todos.length,
      content: content,
      isChecked: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const checkTodo = (id: number) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }
    });
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <TodoTitle />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
