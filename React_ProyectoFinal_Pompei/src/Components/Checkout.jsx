import React, { useContext, useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import Swal from "sweetalert2"; // Importa SweetAlert2
import { CartContext } from "./CartContext";
import {
  addDoc,
  doc,
  getDoc,
  updateDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

const Checkout = () => {
  const cartContext = useContext(CartContext);

  const { cart } = useContext(CartContext);
  const [orderId, setOrderId] = useState();
  const [buyer, setBuyer] = useState({
    fullName: "",
    email: "",
    emailRepeat: "",
    telephone: "",
    address: "",
    paymentMethod: "",
  });

  const { fullName, email, emailRepeat, telephone, address, paymentMethod } =
    buyer;
  const [showError, setShowError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "fullName") {
      if (/^[A-Za-z\s]+$/.test(value) || value === "") {
        setBuyer({
          ...buyer,
          [name]: value,
        });
      }
    } else if (name === "telephone") {
      if (/^[0-9\s]+$/.test(value) || value === "") { // Cambio aquí
        setBuyer({
          ...buyer,
          [name]: value,
        });
      }
    } else {
      setBuyer({
        ...buyer,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email !== emailRepeat) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }
    const isStockSufficient = await checkStockSufficient();
    if (!isStockSufficient) {
      alert("Sin Stock suficiente.");
      return;
    }
    const total = cart.reduce(
      (acum, unItem) => acum + unItem.price * unItem.cant,
      0
    );
    const dia = new Date();
    const data = { buyer, cart, total, dia };
    await generateOrder(data);
    await updateProductStock();
  };

  const updateProductStock = async () => {
    const querydb = getFirestore();
    for (const product of cart) {
      const itemDoc = doc(querydb, "Products", product.id);
      const itemSnapshot = await getDoc(itemDoc);
      if (itemSnapshot.exists()) {
        const stockNuevo = itemSnapshot.data().stock - product.cant;
        await updateDoc(itemDoc, { stock: stockNuevo });
      }
    }
  };

  const checkStockSufficient = async () => {
    const querydb = getFirestore();
    for (const product of cart) {
      const itemDoc = doc(querydb, "products", product.id);
      const itemSnapshot = await getDoc(itemDoc);
      if (itemSnapshot.exists()) {
        const stockReal = itemSnapshot.data().stock;
        if (stockReal < product.cant) {
          return false;
        }
      }
    }
    return true;
  };

  const generateOrder = async (data) => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "Orders");
    localStorage.clear();
    const order = await addDoc(queryCollection, data);
    setOrderId(order.id);
    cartContext.clearCart();
    // Muestra el mensaje de éxito con los detalles de la orden generada
    Swal.fire({
      icon: "success",
      title: "¡Compra exitosa!",
      text: "Tu orden ha sido generada con éxito.",
      html: `<p>Detalles de la orden:</p>
      <p><strong>Nombre completo:</strong> ${data.buyer.fullName}</p>
           <p><strong>Email:</strong> ${data.buyer.email}</p>
           <p><strong>Teléfono:</strong> ${data.buyer.telephone}</p>
           <p><strong>Dirección:</strong> ${data.buyer.address}</p>
           <p><strong>Método de pago:</strong> ${data.buyer.paymentMethod}</p>
           <p><strong>ID de la orden:</strong> ${orderId}</p>
           <p><strong>Productos:</strong> ${data.cart.map((product) => product.title).join(", ")}</p>`,
    });
  };

  return (
    <Container className="d-flex justify-content-center  vh-100">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mt-2" controlId="fullName">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mt-2"  controlId="telephone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            name="telephone"
            value={telephone}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mt-2"  controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mt-2" controlId="emailRepeat">
          <Form.Label>Repita el Email</Form.Label>
          <Form.Control
            type="email"
            name="emailRepeat"
            value={emailRepeat}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mt-2"  controlId="address">
          <Form.Label>Dirección de envío</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            value={address}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group className="mt-2"  controlId="paymentMethod">
          <Form.Label>Método de pago</Form.Label>
          <Form.Control
            as="select"
            name="paymentMethod"
            value={paymentMethod}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccione un método</option>
            <option value="credit">Tarjeta de Crédito</option>
            <option value="paypal">PayPal</option>
          </Form.Control>
        </Form.Group>

        {showError && (
          <Alert variant="danger">Los correos electrónicos no coinciden.</Alert>
        )}

        <Button className="mt-5" variant="primary" type="submit">
          Confirmar Compra
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;
