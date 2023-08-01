
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link className="logo" to="/">Dudu <span className="logo-azul">Flix</span></Link>
            <Link className="favoritos" to="/favoritos">Minha lista</Link>
        </header>
    );
}

export default Header;