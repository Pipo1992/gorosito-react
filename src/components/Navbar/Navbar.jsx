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
                            <Link to="/category/men's clothing" className="nav-link" aria-current="page">Ropa Hombre</Link>
                        </li>
                        <li>
                            <Link to="/category/women's clothing" className="nav-link" aria-current="page">Ropa Mujer</Link>
                        </li>
                        <li>
                            <Link to="/category/jewelery" className="nav-link" aria-current="page">Joyeria</Link>
                        </li>
                        <li>
                            <Link to="/category/electronics" className="nav-link" aria-current="page">Electronica</Link>
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