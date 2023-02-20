import moon from "../../assets/icon-moon.svg";
import classes from "./Main.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.nav}>
        <h1>TODO</h1>
        <img src={moon} alt="moon" />
      </div>
    </header>
  );
};

export default Header;
