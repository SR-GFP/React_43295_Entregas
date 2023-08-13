import React, { useState } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";

const ItemCount = ({ productsStock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);  

  const increment = () => {
    if (counter < productsStock) {
      setCounter(counter + 1);      
    }
  };

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1);      
    }
  };

  return (
    <Container className="container-itencount">
      <Row className="mb-3 ">
        <Col md={2}>
          <ButtonGroup aria-label="Basic outlined example">
            <Button variant="outline-primary" onClick={()=> decrement()}>
              -
            </Button>
            <Button variant="outline-primary">{counter}</Button>
            <Button variant="outline-primary" onClick={()=> increment()}>
              +
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <Button variant="outline-primary" onClick={() => onAdd(counter)}>
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemCount;
