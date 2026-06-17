import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            placeholder="Enter your task here"
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
          ></input>
          <button className={styles.button} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
