
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const CartWidget = () =>{
    return (

        <div>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <FontAwesomeIcon icon={faShoppingCart} />
            </a>

        </div>

    );
}

export default CartWidget;