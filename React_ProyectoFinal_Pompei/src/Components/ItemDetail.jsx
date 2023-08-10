import React from 'react';
import { Card, Row, Col, Image,  } from "react-bootstrap";
import ItemCount from "./ItemCount";

const ItemDetail = ( {products} ) => {

  return (
    <Card className="my-3 bg-light">
      <Row>        
        <Col md={4} className="d-flex align-items-center justify-content-center">
          <Image src={products.image} fluid />
        </Col>        
        <Col md={8}>
          <Card.Body>
            <Card.Title>{products.brand} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{products.name} </Card.Subtitle>
            <Card.Text>{products.description} </Card.Text>
            <Card.Text>Stock: {products.stock} </Card.Text>
            <Card.Text>Precio: {products.price} </Card.Text>            
            <div>
                <ItemCount productsStock ={products.stock}/>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default ItemDetail
