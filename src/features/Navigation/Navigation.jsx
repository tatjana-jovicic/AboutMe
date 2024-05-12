import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <Link className="navigation" to={{ pathname: "/" }}>
        Home
      </Link>
      <Link className="navigation" to={{ pathname: "/about" }}>
        About
      </Link>
      <Link className="navigation" to={{ pathname: "/works" }}>
        Works
      </Link>
      <Link className="navigation" to={{ pathname: "/contact" }}>
        Contact
      </Link>
    </nav>
  );
};
export default Navigation;
