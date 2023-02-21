import { Fragment, useContext } from "react";
import Main from "./components/Layout/Main";
import TodoContext from "./components/Store/todo-context";
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";
import classes from "./App.module.css";

function App() {
  const { theme } = useContext(TodoContext);
  document.body.className = theme ? classes.dark : "";

  return (
    <Fragment>
      <Main />
      <TodoInput />
      <TodoList />
    </Fragment>
  );
}

export default App;
