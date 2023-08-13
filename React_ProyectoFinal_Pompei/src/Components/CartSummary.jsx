import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "./CartContext";

const CartSummary = ({ cart }) => {
  const {clearCart} = useContext(CartContext)
  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.cant,
    0
  );
  const handleCheckout = () => {
    clearCart(); // Reiniciar el carrito
  };
  return (
    <div>
      {cart.length === 0 ? (
        <h1>No hay Productos en el Carrito</h1>
      ) : (
        <div>
          <div>
            <h3>Total a pagar: u$d {totalAmount}</h3>
          </div>
          <Link to="/checkout">
            <Button variant="success" onClick={handleCheckout}>Finaliza tu Compra</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
