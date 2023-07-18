import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import "../stylesSheets/card.css"

const ItenCard = ( { image, brand, name, price,age } ) => {
  return (
    <Col md="4" className='mt-3'>    
    <Card className='' bg='dark' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={image} className='card-image' />
      <Card.Body className='card-body-css'>
        <Card.Title>{brand}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> {name} </Card.Subtitle>
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

export default ItenCard
