import { useContext } from "react";
import TodoContext from "../Store/todo-context";
import classes from "./TodoInfo.module.css";

const TodoInfo = () => {
  const { filterTodos, removeTodo, activeButton, selectHandler } =
    useContext(TodoContext);

  return (
    <div className={classes.todoInfo}>
      <div className={classes.items}>
        <h5>{filterTodos.length} items left</h5>
      </div>
      <div className={classes.nav}>
        <ul>
          <li
            className={activeButton === "all" ? classes.selected : ""}
            onClick={() => selectHandler("all")}
          >
            All
          </li>
          <li
            className={activeButton === "active" ? classes.selected : ""}
            onClick={() => selectHandler("active")}
          >
            Active
          </li>
          <li
            className={activeButton === "completed" ? classes.selected : ""}
            onClick={() => selectHandler("completed")}
          >
            Completed
          </li>
        </ul>

        <button onClick={removeTodo}>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoInfo;
