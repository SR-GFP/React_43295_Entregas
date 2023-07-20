import React from 'react'
import { useState } from "react";
import { Container, Row, Col, Button,  ButtonGroup  } from 'react-bootstrap';
import "../stylesSheets/itemcount.css"

const ItemCount = ( {productsStock} ) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStock] = useState(productsStock);
  
  
  

  const increaseStock = () => {
    if(counter < productsStock){  
      setCounter (counter + 1)    
      setStock (stock - counter) 
    }        
  }

  const decreaseStock = () => {
    if(counter > 1){
      setCounter (counter - 1) 
      setStock (stock + counter)
    }
  }  

  return (
    <Container className='container-itencount'>
      <Row className="mb-3 ">
        <Col md={2}>
          <ButtonGroup aria-label="Basic outlined example">
            <Button variant="outline-primary" onClick={decreaseStock}>-</Button>
            <Button variant="outline-primary">{counter}</Button>
            <Button variant="outline-primary" onClick={increaseStock}>+</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col md={2}>          
          <Button variant="outline-primary">Agregar al carrito</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemCount;


