import { Link } from "react-router-dom";
import "../index.css";
export const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/" className="navButton">
        Accueil
      </Link>
      <Link to="/menu" className="navButton">
        Menu
      </Link>
      <Link to="/bar" className="navButton">
        Bar
      </Link>
      <Link to="/reserver" className="navButton">
        Réserver
      </Link>
    </div>
  );
};
