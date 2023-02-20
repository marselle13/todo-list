import { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={classes.card}>
      <div className={classes.checkbox} onClick={toggleCheckbox}>
        <input type="checkbox" className={isChecked ? classes.checked : ""} />
      </div>
      {props.children}
    </div>
  );
};

export default Card;
