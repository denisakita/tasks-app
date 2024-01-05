import Logo from "../assets/logo.png";
import "./Header.css";
import {Link, NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="logo" className="logo"/>
                <span>Tasks App</span>
            </Link>

            <nav className="navigation">
            <NavLink to="/" className="link" end>Home</NavLink>
            <NavLink to="/products" className="link">Products</NavLink>
            <NavLink to="/contact" className="link">Contact</NavLink>
            </nav>
        </header>
    )
}

