import React from 'react'
import "./card.css"
import Boton from "../Boton/Boton";
import { useState } from "react";

const Card = ({ img, destileria, nombre, años , info, precio }) => {
  const [cantidad, setCantidad] = useState(0)
  
  const sumarCantidad = () => {
    setCantidad(cantidad + 1)
  };

  const restarCantidad = () => {
    setCantidad(cantidad - 1)
  };

  return (
    <div className='card'>
      <div className="card-imagen-contenedor">
        <img className='img'
        src={require(`../../media/${img}.jpg`)}
        alt="Imagen del Whyski" />
      </div>
      <div className='card-datos-contenedor'>        
        <div className="card-info-contenedor">
          <h3> Marca: {destileria} </h3>
          <h3> Nombre:  {nombre} </h3>
          <h3> Años: {años} Años </h3>
          <p> Caracteristicas: {info} </p>
          <p> Precio: {precio} </p>
        </div>
        <div className="card-compra-contenedor">
          <Boton
          manejarClick={sumarCantidad}
          contenido="+" />
            <input type="number" value={cantidad} readOnly/>
          <Boton
          manejarClick={restarCantidad}
          contenido="-" />
          <p>Total= $</p>
        </div>
      </div>
    </div>
  )
}

export default Card