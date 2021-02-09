import CardComponent from './../../../components/CardComponent/';

const ItemList = ({products}) =>{
    console.log(products);
    return (
        
        <>
        
            <div className="row">

                {products.map((product) =>{
                     return <CardComponent key={product.id}product={product} />
                })}
            
            </div>

        
        </>
    );
}

export default ItemList;