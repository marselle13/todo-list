import { useContext } from "react";
import TodoContext from "../Store/todo-context";
import classes from "./Card.module.css";

const Card = (props) => {
  const { theme } = useContext(TodoContext);

  return (
    <div className={`${classes.card} ${theme && classes.dark}`}>
      {props.children}
    </div>
  );
};

export default Card;
