import ItemCount from './../ItemCount/';


const CardComponent = ({stock}) =>{
    
    return (

        <>   
            <div className="col s12 m12">
                <div className="card z-depth-3">
                    <div className="card-body">
                        <h4 className="card-title">Producto</h4>
                        <p>Cantidad disponible: {stock}</p>

                        <ItemCount stock={stock}/>
                    </div>
                </div>
            </div>
        </>


    );
}


export default CardComponent;