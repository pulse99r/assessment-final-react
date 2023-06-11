import { Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <nav className="nav">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/">Movies</Link>
      <Link className="link" to="/">People</Link>
      <Link className="link" to="/">Locations</Link>
    </nav>
  );
}
export default Nav;