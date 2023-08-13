import React, { useState } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  const [currentStock, setCurrentStock] = useState(stock);

  const increaseStock = () => {
    if (counter < currentStock) {
      setCounter(counter + 1);
      setCurrentStock(currentStock - 1);
    }
  };

  const decreaseStock = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      setCurrentStock(currentStock + 1);
    }
  };

  return (
    <Container className="container-itencount">
      <Row className="mb-3 ">
        <Col md={2}>
          <ButtonGroup aria-label="Basic outlined example">
            <Button variant="outline-primary" onClick={decreaseStock}>
              -
            </Button>
            <Button variant="outline-primary">{counter}</Button>
            <Button variant="outline-primary" onClick={increaseStock}>
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
