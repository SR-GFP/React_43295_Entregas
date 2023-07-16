import React from "react"
import "./boton.css"


function Boton({ manejarClick, contenido }) {
  return (
    <button type="button"
    className="boton"
    onClick={manejarClick}>
      {contenido}      
    </button>
  )
}

export default Boton