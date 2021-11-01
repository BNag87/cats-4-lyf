import { Link } from "react-router-dom";
import "./nav-bar.css";
import Image from "./img/cat.png";

const Navbar = () => {
    return(
        <div className = "grandWrapper">
        <nav className="navbar">
            <h1>Cats for Life</h1>
            <div className="links">
                <div className = "soloLink">
                    <Link to="/">Home</Link>   
                </div>
                <div className = "soloLink">
                <Link to="/basketList">Basket</Link>
                </div>
                <div className = "soloLink">
                <Link to="/about">About</Link>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;
