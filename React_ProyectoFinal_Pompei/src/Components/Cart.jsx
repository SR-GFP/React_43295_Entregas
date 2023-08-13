import React, { useContext } from "react";
import {CartContext} from "./CartContext";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const totalAmount = cart.reduce((total, product) => total + product.price * product.cant,0);

  return (
    <Container>
      <h1>Resumen de tu Compra</h1>
      <Row>
        <Col>Imagen</Col>
        <Col>Nombre</Col>
        <Col>Precio unitario</Col>
        <Col>Cantidad</Col>
        <Col>Precio total</Col>
        <Col>Acciones</Col>
      </Row>
      {cart.map((product) => (
        <Row key={product.id}>
          <Col>
            <img
              src={product.img}
              alt={product.name}
              style={{ maxWidth: "100px" }}
            />
          </Col>
          <Col>{product.name}</Col>
          <Col>{product.price}</Col>
          <Col>{product.cant}</Col>
          <Col>{product.price * product.cant}</Col>
          <Col>
            <Button variant="danger" onClick={() => removeItem(product.id)}>
              Eliminar Producto
            </Button>
          </Col>
        </Row>
      ))}
      {cart.length === 0 ? (
        <h1>No hay Productos en el Carrito</h1>
      ) : (
        <div>
          <div>
            <h3>Total a pagar: ${totalAmount}</h3>
          </div>
          <Link to="/checkout">
            <Button variant="success">Finaliza tu Compra</Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Cart;
