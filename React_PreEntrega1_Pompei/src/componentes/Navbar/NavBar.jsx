import React from 'react'
import CartWidget from '../Cart-Widget/CartWidget.jsx'
import "./navbar.css"

function NavBar() {
  return (
    <div className='navbar-contenedor'>
      <div className='logo-contenedor'>
        <h2>El Club del WHISKY</h2>
      </div>
      <div className='links-contenedor'>        
        <a className='links-a' href="../">Nosotros</a>
        <a className='links-a' href="../">Historia</a>
        <a className='links-a' href="../">Contacto</a>
        <a className='links-a' href="../">Whiskys</a>        
      </div>
      <div className='cartwidget-contenedor'>
        <CartWidget />
      </div>
    </div>
  )
}

export default NavBar

