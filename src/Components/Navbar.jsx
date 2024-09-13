// src/Components/Navbar.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={state.theme === "dark" ? "dark" : "light"}>
      <Link to="/"><h4>Home</h4></Link>
      <Link to="/contacto"><h4>Contacto</h4></Link>
      <Link to="/favs"><h4>Favoritos</h4></Link>

      <button className={`theme-toggle-btn ${state.theme === "light" ? "dark" : "light"}`} onClick={toggleTheme}>
        {state.theme === "light" ? "🌑" : "☀️"}

    </button>
    </nav>
  );
};

export default Navbar;
