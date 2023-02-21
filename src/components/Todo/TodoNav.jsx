import { useContext } from "react";
import TodoContext from "../Store/todo-context";
import classes from "./TodoNav.module.css";

const TodoNav = () => {
  const { selectHandler, activeButton, theme } = useContext(TodoContext);

  return (
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
        className={`${activeButton === "completed" ? classes.selected : ""} ${
          theme ? classes.darkNav : classes.lightNav
        }`}
        onClick={() => selectHandler("completed")}
      >
        Completed
      </li>
    </ul>
  );
};

export default TodoNav;
