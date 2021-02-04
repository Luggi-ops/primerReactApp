import ItemCount from './../ItemCount/';


const CardComponent = ({stock}) =>{
    
    return (

        <>   
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Producto</h4>

                    <ItemCount stock={stock}/>
                </div>
            </div>
        </>


    );
}


export default CardComponent;