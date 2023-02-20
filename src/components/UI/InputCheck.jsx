import classes from "./InputCheck.module.css";

const InputCheck = (props) => {
  return (
    <div className={classes.checkbox} onClick={props.onClick}>
      <input type="checkbox" className={props.check ? classes.checked : ""} />
    </div>
  );
};

export default InputCheck;
