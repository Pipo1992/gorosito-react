import "./Navbar.css";
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import CardWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="navContainer">
            <nav className="navigation">
                <ul className="list">
                    <li>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/category/Indumentaria">Indumentaria</Link>
                    </li>
                    <li>
                        <Link to="/category/Accesorios">Accesorios</Link>
                    </li>
                    <li className="carrito">
                        <Link to="/cart">
                            <CardWidget />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;