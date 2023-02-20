import { Fragment } from "react";
import Main from "./components/Layout/Main";
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <Fragment>
      <Main />
      <TodoInput />
      <TodoList />
    </Fragment>
  );
}

export default App;
