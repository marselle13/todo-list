import { useContext, useState } from "react";
import TodoContext from "../Store/todo-context";
import Card from "../UI/Card";
import InputCheck from "../UI/InputCheck";
import classes from "./TodoInput.module.css";

const TodoInput = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [todo, setTodo] = useState("");
  const { addTodo, theme } = useContext(TodoContext);

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };
  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const todoHandler = (e) => {
    e.preventDefault();

    if (todo === "") return;

    const todoList = {
      id: Math.random().toString(36).substring(2, 9),
      isChecked,
      todo,
    };

    addTodo(todoList);
    setTodo("");
  };

  return (
    <Card>
      <div className={classes.inputDiv}>
        <InputCheck onClick={toggleCheckbox} check={isChecked} />
        <form onSubmit={todoHandler}>
          <input
            type="text"
            placeholder="Create a new todo..."
            className={`${classes.todoInput} ${theme && classes.darkInput}`}
            onChange={inputHandler}
            value={todo}
          />
        </form>
      </div>
    </Card>
  );
};

export default TodoInput;
