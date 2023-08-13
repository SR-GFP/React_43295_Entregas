import React, { useContext } from 'react';
import "../Styles/cartWidget.css";
import { CartContext } from './CartContext';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <Link to="/cart">
    <AiOutlineShoppingCart className='icono-carrito' />
    <Badge className='Counter' bg='danger'> {}
      {getQuantity()}
    </Badge>
  </Link>
  )
}
export default CartWidget


