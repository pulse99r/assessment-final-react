import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <nav className="nav">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/movies">Movies</Link>
      <Link className="link" to="/people">People</Link>
      <Link className="link" to="/locations">Locations</Link>
    </nav>
  );
}
export default Nav;