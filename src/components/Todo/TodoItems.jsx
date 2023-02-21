import { useContext } from "react";

import TodoContext from "../Store/todo-context";
import InputCheck from "../UI/InputCheck";
import classes from "./TodoItems.module.css";

const TodoItems = () => {
  const { filterTodos, listHandler } = useContext(TodoContext);

  return (
    <div className={classes.itemsList}>
      <ul>
        {filterTodos.map((todo, index) => (
          <li key={todo.id} onDragStart={(e) => console.log(e)} draggable>
            <InputCheck
              onClick={() => listHandler(todo.id)}
              check={todo.isChecked}
            />
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
