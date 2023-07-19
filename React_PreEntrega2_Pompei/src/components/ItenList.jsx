import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import "../stylesSheets/itemlist.css"

const ItemList = ( { image, brand, name, price,age } ) => {
  return (
    <Col md="4" className='mt-3'>    
    <Card border="info"  style={{ width: '16rem' }}>
      <Card.Img variant="top" src={image} className='card-image' />
      <Card.Body >
        <Card.Title>{brand}</Card.Title>
        <Card.Subtitle className="mb-2"> {name} </Card.Subtitle>
        <Card.Text>
          <p>Años: {age} </p>
          <p> Precio: {price} </p>          
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default ItemList
