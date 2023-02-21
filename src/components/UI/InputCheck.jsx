import { useContext } from "react";
import TodoContext from "../Store/todo-context";
import classes from "./InputCheck.module.css";

const InputCheck = (props) => {
  const { theme } = useContext(TodoContext);

  return (
    <div className={classes.checkbox} onClick={props.onClick}>
      <input
        type="checkbox"
        className={`${props.check ? classes.checked : ""} ${
          theme && classes.darkCheck
        }`}
      />
    </div>
  );
};

export default InputCheck;
