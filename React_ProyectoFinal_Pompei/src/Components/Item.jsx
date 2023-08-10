import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../stylesSheets/item.css";

const Item = ({ products }) => {
  return (
    <Link to={"/item/" + products.id} id="link-card">
      <Card border="info" style={{ width: "16rem" }}>
        <Card.Img variant="top" src={products.image} className="card-image" />
        <Card.Body>
          <Card.Title>{products.brand}</Card.Title>
          <Card.Subtitle className="mb-2"> {products.name} </Card.Subtitle>
          <Card.Text>
            <p>Años: {products.age} </p>
          </Card.Text>
          <Card.Text>              
            <p> Precio: {products.price} </p>
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Item;
