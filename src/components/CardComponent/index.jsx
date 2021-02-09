import ItemCount from './../ItemCount/';


const CardComponent = ({product}) =>{
    return (

        <>   
            <div className="col l4 m6 s12">
                <div className="card z-depth-2 hoverable">
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p>Cantidad disponible: {product.stock}</p>
                        <p>Precio: {product.price}</p>

                        <ItemCount stock={product.stock}/>
                    </div>
                </div>
            </div>
        </>


    );
}


export default CardComponent;