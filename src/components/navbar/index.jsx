import CartWidget from './CartWidget.jsx';

const NavbarComponent = () => {

    return(

        <div>
            <nav>
                <div className="nav-wrapper light-blue accent-2">
                    <a href="#" className="brand-logo">MANSport</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Promociones</a></li>
                        <li><a href="#">Clientes</a></li>
                        <li><a href="#">Sucursales</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><CartWidget /></li>
                        
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default NavbarComponent;