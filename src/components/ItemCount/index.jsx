import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faMinus} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react'; //para utilizar los hooks de estados debemos importarlos


const ItemCount = ({stock}) =>{

    const [count, setCount] = useState(0); //declaramos con el spreead el estado, se modificará con la funcion setCount

    return (

        <>
            <span className="d-block">{count}</span>
            <button className="btn-floating btn-large waves-effect waves-light light-blue accent-2 mr-5" onClick={() =>{
                if(count < stock){
                    setCount(count+1);
                } //implementar else mensaje de no hay stock
                
            }}><FontAwesomeIcon icon={faPlus}/>
            </button>

            <button className="btn-floating btn-large waves-effect waves-light light-blue accent-2" onClick={() =>{
                if(count !== 0){
                    setCount(count-1);
                }
            }}><FontAwesomeIcon icon={faMinus}/></button>
        </>

    );
}

export default ItemCount;