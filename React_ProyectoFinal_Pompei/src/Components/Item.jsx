import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../Styles/item.css";

const Item = ({ products }) => {
  return (
    <Link to={"/item/" + products.id} id="link-card">
      <Card border="info" style={{ width: "16rem" }}>
        <Card.Img variant="top" src={products.image} className="card-image" />
        <Card.Body>
          <Card.Title className="card-title">{products.brand}</Card.Title>
          <Card.Subtitle className="mb-2  "> {products.name} </Card.Subtitle>
          <Card.Text>
            Años: {products.age}
          </Card.Text>
          <Card.Text>              
            Precio: u$d {products.price}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Item;
