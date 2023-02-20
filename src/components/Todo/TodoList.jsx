import Card from "../UI/Card";
import TodoInfo from "./TodoInfo";
import TodoItems from "./TodoItems";
import classes from "./TodoList.module.css";
const TodoList = () => {

  return (
    <div className={classes.itemsDiv}>
      <div className={classes.todoDiv}>
        <Card>
          <TodoItems />
          <TodoInfo />
        </Card>
      </div>
    </div>
  );
};

export default TodoList;
