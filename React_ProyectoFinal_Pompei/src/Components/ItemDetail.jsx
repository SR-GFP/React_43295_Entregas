import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import { Card, Row, Col, Image } from "react-bootstrap";
import "../Styles/ItemDetail.css";

const ItemDetail = ({ products }) => {
  const { addItem } = useContext(CartContext);
  const handleAddProduct = (counter) => {
    const { id, price, title, image } = products;
    const productToAdd = { id, price, title, image, counter };
    addItem({ productToAdd, counter });
  };

  return (
    <Card className="my-3 custom-card">
      <Row>
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center"
        >
          <Image className="product-image" src={products.image} fluid />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title className="product-brand">{products.brand} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted product-name">
              {products.name}{" "}
            </Card.Subtitle>
            <Card.Text>{products.description} </Card.Text>
            <Card.Text>Stock: {products.stock} </Card.Text>
            <Card.Text>Precio: {products.price} </Card.Text>
            <div>
              <ItemCount
                productsStock={products.stock}
                initial={1}
                onAdd={handleAddProduct}
              />
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
