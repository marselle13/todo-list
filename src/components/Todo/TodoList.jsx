import Card from "../UI/Card";
import TodoInfo from "./TodoInfo";
import TodoItems from "./TodoItems";
import classes from "./TodoList.module.css";
import TodoNav from "./TodoNav";
const TodoList = () => {
  return (
    <div className={classes.itemsDiv}>
      <div className={classes.todoDiv}>
        <Card>
          <TodoItems />
          <TodoInfo />
        </Card>
        <Card>
          <div className={classes.navMob}>
            <TodoNav />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TodoList;
