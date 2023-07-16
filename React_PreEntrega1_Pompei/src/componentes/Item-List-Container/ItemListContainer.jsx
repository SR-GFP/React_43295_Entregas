import React from 'react'
import Card from "../Card/Card";
import "./itemlistcontainer.css"



const ItemListContainer = ( { greeting } ) => {
  return (
    <div className='main-contenedor'>
      <div className='greeting-contenedor'>
        <h3>{greeting}</h3>      
      </div>
      <div className='card-contenedor'>
        <Card
        img= "CardhuGoldReserve"
        destileria= "Cardhu"
        nombre= "Gold Reserva"
        años="12"
        precio= "usd 700.-"
        /> 
        <Card
        img= "ChivasRegal18años"
        destileria= "Chivas Regal"
        nombre= "XVIII"
        años="18"
        info=""
        precio= "usd 700.-"
        />
        <Card
        img= "Dalmore12años"
        destileria= "Dalmore"
        nombre= "XII"
        años="12"
        info=""
        precio= "usd 700.-"
        />
        <Card
        img= "Dyc15añosEdiciónEspecial60Aniversario"
        destileria= "DYC"
        nombre= "Edición Especial 60 Aniversario"
        años="15"
        info=""
        precio= "usd 700.-"
        />
        <Card
        img= "JohnnieWalker15añosetiquetaverde"
        destileria= "JohnnieWalker"
        nombre= "Etiqueta Verde"
        años="15"
        info=""
        precio= "usd 700.-"
        />
        <Card
        img= "JohnnieWalkerGoldLabelReserva"
        destileria= "Johnnie Walker"
        nombre= "Gold Label Reserve"
        años="18"
        info=""
        precio= "usd 700.-"
        /> 
        <Card
        img= "Lagavulin16años"
        destileria= "Lagavulin"
        nombre= "XVI"
        años="16"
        info=""
        precio= "usd 700.-"
        />
        <Card
        img= "MacallanTripleCask12años"
        destileria= "Macallan"
        nombre= "Triple Cask"
        años="12"
        info=""
        precio= "usd 700.-"
        />
        
      </div>
    </div>
  )

  }
export default ItemListContainer