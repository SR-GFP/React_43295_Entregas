import React from 'react'
import "./cartwidget.css"
import { AiOutlineShoppingCart } from "react-icons/ai";



function CartWidget({ cantidad }) {  
  
  return (
    <div>
      <AiOutlineShoppingCart className='icono-carrito' />
      <span> {cantidad} 0</span>
    </div>
  )
}

export default CartWidget