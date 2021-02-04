import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';


const ItemCount = ({stock}) =>{


    const [count, setCount] = useState(0);

    return (

        <>

            <span className="d-block">{count}</span>
            

            <a className="btn-floating btn-large waves-effect waves-light light-blue accent-2" onClick={() =>{
                if(count < stock){
                    setCount(count+1);
                }
                
            }}><FontAwesomeIcon icon={faPlus}/>
            
            </a>


            <a className="btn-floating btn-large waves-effect waves-light light-blue accent-2" onClick={() =>{
                if(count != 0){
                    setCount(count-1);
                }
            }}><FontAwesomeIcon icon={faMinus}/></a>

        </>

    );
}

export default ItemCount;