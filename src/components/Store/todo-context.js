import React, { useState } from "react";

const TodoContext = React.createContext({
  filterTodos: [],
  addTodo: (todo) => {},
  removeTodo: () => {},
  selectHandler: (select) => {},
  listHandler: (index) => {},
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

  const listHandler = (id) => {
    const updateTodos = [...todos];
    const focusTodo = updateTodos.find((todo) => todo.id === id);
    focusTodo.isChecked = !focusTodo.isChecked;
    setTodos(updateTodos);
  };

  const filterTodos = todos.filter((todo) => {
    let filterArr = [];
    if (activeButton === "all") {
      filterArr = todo;
    } else if (activeButton === "active") {
      filterArr = todo.isChecked === false;
    } else if (activeButton === "completed") {
      filterArr = todo.isChecked === true;
    }

    return filterArr;
  });

  const todoContext = {
    filterTodos,
    activeButton,
    listHandler,
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
