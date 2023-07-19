import React from 'react'
import { useState } from "react";
import { Container, Row, Col, Button, Alert, ButtonGroup  } from 'react-bootstrap';

const ItemCount = ( {productsStock} ) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStoc] = useState(productsStock);

  const increaseStock = () => {
    setCounter(counter < stock ? counter++ : counter)
  }
  const decreaseStock = () => {
    setCounter(counter > 1 ? counter - 1 : counter);
  };

  return (
    <Container id="itemcount">
      <Row className="mb-3">
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

export default ItemCount


