import { useContext } from "react";
import TodoContext from "../Store/todo-context";
import InputCheck from "../UI/InputCheck";
import classes from "./TodoItems.module.css";

const TodoItems = () => {
  const { filterTodos, listHandler, theme, closeHandler } =
    useContext(TodoContext);

  return (
    <div className={classes.itemsList}>
      <ul>
        {filterTodos.map((todo) => (
          <li
            key={todo.id}
            onDragStart={(e) => console.log(e)}
            className={theme && classes.darkList}
            draggable
          >
            <InputCheck
              onClick={() => listHandler(todo.id)}
              check={todo.isChecked}
            />
            <div className={classes.labelDiv}>
              <p
                className={`${classes.itemLabel} ${
                  todo.isChecked && classes.doneTodo
                } ${theme && classes.darkItemLabel}`}
              >
                {todo.todo}
              </p>

              <button
                onClick={() => closeHandler(todo.id)}
                className={classes.itemClose}
              >
                {" "}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItems;
