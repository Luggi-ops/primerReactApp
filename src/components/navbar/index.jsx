import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget.jsx';

const NavbarComponent = () => {

    return(

        <div>
            <h1>MAN</h1>
            <nav className="navbar navbar-dark bg-dark">

                <ul className="nav">
                    <li className="nav-item"><a href="" className="nav-link text-white">Servicios</a></li>
                    <li className="nav-item"><a href="" className="nav-link text-white">Promos</a></li>
                    <li className="nav-item"><a href="" className="nav-link text-white">Clientes</a></li>
                    <li className="nav-item"><a href="" className="nav-link text-white">Consultá ya</a></li>
                </ul>

                <CartWidget/>

            </nav>
        </div>

    );
}

export default NavbarComponent;