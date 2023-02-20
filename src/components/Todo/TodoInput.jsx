import Card from "../UI/Card";
import classes from "./TodoInput.module.css";

const TodoInput = () => {
  return (
    <Card>
      <div className={classes.inputDiv}>
        <input
          type="text"
          placeholder="Create a new todo..."
          className={classes.todoInput}
        />
      </div>
    </Card>
  );
};

export default TodoInput;
