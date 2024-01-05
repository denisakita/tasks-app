import Logo from "../assets/logo.png";
import "./Header.css";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="logo" className="logo"/>
                <span>Tasks App</span>
            </Link>

            <nav className="navigation"></nav>
            <Link to="/" className="link">Home</Link>
            <Link to="/products" className="link">Products</Link>
            <Link to="/contact" className="link">Contact</Link>
        </header>
    )
}

