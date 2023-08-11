import React from 'react';
import "../Styles/cartWidget.css"
import { AiOutlineShoppingCart } from "react-icons/ai";


const CartWidget = () => {
  return (
    <>
      <AiOutlineShoppingCart className='icono-carrito' />
      <span>0</span>      
    </>
  )
}
export default CartWidget


