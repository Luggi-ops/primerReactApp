
const FooterComponent = () => {

    return (

        <>

            <footer className="page-footer light-blue accent-2">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">MANSport</h5>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Inicio</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Promociones</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Clientes</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Sucursales</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <p>© 2021 Copyright</p>
                    </div>
                </div>
            </footer>


        </>

    );
}

export default FooterComponent;