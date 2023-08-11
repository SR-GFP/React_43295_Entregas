import Item from "./Item";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";


const ItemList = ({ products }) => {
  return (
    <Row>
      {products.map((products) => (
        <Col md="4" className="mt-3" key={products.id}>
          <Item products={products} />
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;
