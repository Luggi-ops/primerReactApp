import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {faMinusSquare} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';


const ItemCount = ({stock}) =>{


    const [count, setCount] = useState(0);

    return (

        <>

            <span className="d-block">{count}</span>
            

            <button className="btn btn-dark mr-2" onClick={() =>{
                console.log(stock);
                if(count < stock){
                    setCount(count+1);
                }
                
            }}><FontAwesomeIcon icon={faPlusSquare}/></button>


            <button className="btn btn-dark" onClick={() =>{
                if(count != 0){
                    setCount(count-1);
                }
            }}><FontAwesomeIcon icon={faMinusSquare}/></button>

        </>

    );
}

export default ItemCount;