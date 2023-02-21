import { useContext } from "react";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";
import TodoContext from "../Store/todo-context";
import classes from "./Main.module.css";
const Header = () => {
  const { theme, themeHandler } = useContext(TodoContext);

  return (
    <header className={classes.header}>
      <div className={classes.nav}>
        <h1>TODO</h1>
        <button onClick={themeHandler}>
          {theme ? <img src={sun} alt="sun" /> : <img src={moon} alt="moon" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
