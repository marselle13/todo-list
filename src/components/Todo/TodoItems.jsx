import { useContext } from "react";
import { act } from "react-dom/test-utils";
import TodoContext from "../Store/todo-context";
import InputCheck from "../UI/InputCheck";
import classes from "./TodoItems.module.css";

const TodoItems = () => {
  const { todos, activeButton } = useContext(TodoContext);
  const filterTodos = todos.filter((todo) => {
    if (activeButton === "all") {
      return todo;
    } else if (activeButton === "active") {
      return todo.isChecked === false;
    } else if (activeButton === "completed") {
      return todo.isChecked === true;
    }
  });

  return (
    <div className={classes.itemsList}>
      <ul>
        {filterTodos.map((todo) => (
          <li key={todo.id}>
            <InputCheck check={todo.isChecked} />
            <p
              className={`${classes.itemLabel} ${
                todo.isChecked && classes.doneTodo
              }`}
            >
              {todo.todo}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItems;
