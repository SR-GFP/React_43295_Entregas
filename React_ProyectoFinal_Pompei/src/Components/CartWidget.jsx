import React from 'react';
import "../Styles/cartWidget.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <>
    <Link to={"/cart"} >
      <AiOutlineShoppingCart className='icono-carrito' />
      <span className='Counter'>0</span>      
    </Link>
    </>
  )
}
export default CartWidget


