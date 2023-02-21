import { useContext } from "react";
import TodoContext from "../Store/todo-context";
import classes from "./TodoInfo.module.css";

const TodoInfo = () => {
  const { filterTodos, removeTodo, activeButton, selectHandler, theme } =
    useContext(TodoContext);

  return (
    <div className={classes.todoInfo}>
      <div className={classes.items}>
        <h5 className={theme && classes.darkCount}>
          {filterTodos.length} items left
        </h5>
      </div>
      <div className={classes.nav}>
        <ul>
          <li
            className={`${activeButton === "all" ? classes.selected : ""} ${
              theme ? classes.darkNav : classes.lightNav
            }`}
            onClick={() => selectHandler("all")}
          >
            All
          </li>
          <li
            className={`${activeButton === "active" ? classes.selected : ""} ${
              theme ? classes.darkNav : classes.lightNav
            }`}
            onClick={() => selectHandler("active")}
          >
            Active
          </li>
          <li
            className={`${
              activeButton === "completed" ? classes.selected : ""
            } ${theme ? classes.darkNav : classes.lightNav}`}
            onClick={() => selectHandler("completed")}
          >
            Completed
          </li>
        </ul>

        <button onClick={removeTodo} className={theme && classes.darkClear}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoInfo;
