import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    paymentMethod: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar acciones con los datos de formData, como enviarlos a un servidor
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="fullName">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Dirección de envío</Form.Label>
        <Form.Control
          as="textarea"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="paymentMethod">
        <Form.Label>Método de pago</Form.Label>
        <Form.Control
          as="select"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccione un método</option>
          <option value="credit">Tarjeta de Crédito</option>
          <option value="paypal">PayPal</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Confirmar Compra
      </Button>
    </Form>
  );
};

export default Checkout;
