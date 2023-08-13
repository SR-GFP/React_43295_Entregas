import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <Container>
      <h1>Resumen de tu Compra</h1>
      <Row>
        <Col>Imagen</Col>
        <Col>Nombre</Col>
        <Col>Precio unitario</Col>
        <Col>Cantidad</Col>
        <Col>Precio total</Col>
        <Col>Eliminar Item</Col>
      </Row>
      {cart.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          onRemove={() => removeItem(product.id)}
        />
      ))}
      <CartSummary cart={cart} />
    </Container>
  );
};

export default Cart;
