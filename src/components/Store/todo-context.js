import React, { useState } from "react";

const TodoContext = React.createContext({
  todos: [],
  addTodo: (todo) => {},
  removeTodo: () => {},
  selectHandler: (select) => {},
});

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [activeButton, setActiveButton] = useState("all");

  const selectHandler = (select) => {
    setActiveButton(select);
  };

  const addTodoHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodoHandler = () => {
    const undoneTodo = todos.filter((todo) => todo.isChecked !== true);
    setTodos(undoneTodo);
  };

  const todoContext = {
    todos,
    activeButton,
    selectHandler,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
