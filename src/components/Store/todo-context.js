import React, { useEffect, useRef, useState } from "react";

const TodoContext = React.createContext({
  theme: false,
  filterTodos: [],
  addTodo: (todo) => {},
  removeTodo: () => {},
  selectHandler: (select) => {},
  closeHandler: (id) => {},
  listHandler: (id) => {},
  themeHandler: () => {},
});

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const [activeButton, setActiveButton] = useState("all");
  const [theme, setTheme] = useState(false);
  const dragItem = useRef();
  const dragOverItem = useRef();

  useEffect(() => {
    const checkTodos = JSON.parse(localStorage.getItem("todos"));
    if (checkTodos) {
      setTodos(checkTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const themeHandler = () => {
    setTheme((prev) => !prev);
  };

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

  const closeHandler = (id) => {
    const updateTodos = [...todos];
    const filterTodos = updateTodos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };

  const dragStart = (position) => {
    dragItem.current = position;
  };

  const dragEnter = (position) => {
    dragOverItem.current = position;
  };

  const drop = () => {
    const copyListItems = [...todos];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTodos(copyListItems);
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
    theme,
    filterTodos,
    activeButton,
    listHandler,
    selectHandler,
    closeHandler,
    themeHandler,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    dragStart,
    dragEnter,
    drop,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
