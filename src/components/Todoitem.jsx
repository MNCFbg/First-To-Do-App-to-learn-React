import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }
  const clicked = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={clicked} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => {
              setTodos(todos.filter((todo) => todo !== item));
            }}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.divider} />
    </div>
  );
}
