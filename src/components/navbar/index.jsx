import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {

    return(

        <div>
            <h1>Tienda de books de fotos</h1>
            <nav className="navbar navbar-dark bg-dark">

                <ul className="nav">
                    <li className="nav-item"><a href="" className="nav-link">Servicios</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Promos</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Clientes</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Consultá ya</a></li>
                </ul>

            </nav>
        </div>

    );
}

export default NavbarComponent;