
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        🍲 RecipeFinder
      </NavLink>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/recipes">
          Recipes
        </NavLink>

        <NavLink to="/favourites">
          Favourites
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;