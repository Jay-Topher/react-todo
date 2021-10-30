import React from "react";
import { ThemeContext } from "../context/ThemeContext";

function ToggleBtn(props) {
  const themeToggler = React.useContext(ThemeContext);
  return <button {...props} onClick={themeToggler}></button>;
}

export default ToggleBtn;
