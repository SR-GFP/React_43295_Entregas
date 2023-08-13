import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const CartItem = ({ product, onRemove }) => {
  const { id, name, brand,  price, cant, image } = product;

  return (
    <Row key={id} className="mb-3">
      <Col>
        <img
          src={image}
          alt={name}
          className="img-fluid"
          style={{ maxWidth: "100px" }}
        />
      </Col>
      <Col>{brand}</Col>      
      <Col>u$d {price}</Col>
      <Col>{cant}</Col>
      <Col>u$d {price * cant}</Col>
      <Col>
        <Button variant="danger" onClick={onRemove}>
          Eliminar Producto
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;
