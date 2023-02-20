import { Fragment } from "react";
import Main from "./components/Layout/Main";
import TodoInput from "./components/Todo/TodoInput";

function App() {
  return (
    <Fragment>
      <Main />
      <TodoInput />
    </Fragment>
  );
}

export default App;
