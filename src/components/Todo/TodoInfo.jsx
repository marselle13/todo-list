import { useContext } from "react";
import TodoContext from "../Store/todo-context";
import classes from "./TodoInfo.module.css";
import TodoNav from "./TodoNav";

const TodoInfo = () => {
  const { filterTodos, removeTodo, theme } = useContext(TodoContext);

  return (
    <div className={classes.todoInfo}>
      <div className={classes.items}>
        <h5 className={theme ? classes.darkCount : ""}>
          {filterTodos.length} items left
        </h5>
      </div>
      <div className={classes.nav}>
        <TodoNav />
        <button
          onClick={removeTodo}
          className={theme ? classes.darkClear : " "}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoInfo;
