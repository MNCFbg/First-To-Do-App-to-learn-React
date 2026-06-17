import { useState } from "react";
import Footer from "./Footer.jsx";
import Form from "./Form.jsx";
import Todolist from "./Todolist.jsx";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const allTodos = todos.length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
      <Footer totalTodos={allTodos} completedTodos={completedTodos} />
    </div>
  );
}
