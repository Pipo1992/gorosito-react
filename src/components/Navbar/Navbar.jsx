import "./Navbar.css";
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import CardWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="navbar navContainer">
            <nav className="navbar navbar-expand-lg navbar-light navigation">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 list">
                        <li className="nav-item">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/category/Indumentaria" className="nav-link" aria-current="page">Indumentaria</Link>
                        </li>
                        <li>
                            <Link to="/category/Accesorios" className="nav-link" aria-current="page">Accesorios</Link>
                        </li>
                        <li className="carrito">
                            <Link to="/cart">
                                <CardWidget />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;