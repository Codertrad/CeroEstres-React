import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = (props) => {
   
    return (
    <a a onClick={props.handleClick} href="#h" > <FaShoppingCart /> Mi compra </a>
    )

}

export default CartWidget