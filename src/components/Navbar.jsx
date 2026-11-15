
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Student List</Link>

      <Link to="/favourites">
        Favourite Students 
      </Link>
    </nav>
  );
}

export default Navbar;
