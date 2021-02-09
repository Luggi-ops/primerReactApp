
import ItemList from './ItemList'
import productList from '../../productList';
import React, {useEffect, useState} from 'react';


const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=> resolve(productList), 2000)
        });
    
        promise.then((result) => setProducts(result));
    }, []);

    return(

        <>
            <div className="container">
                <h2>{greeting}</h2>

                <ItemList products={products}/>
            </div>
        </>

    );
}

export default ItemListContainer;