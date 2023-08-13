import Item from "./Item";
import { Col, Row } from "react-bootstrap";
import "../Styles/itemList.css";

const ItemList = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Col md="4" className="mt-3" key={product.id}>
          <Item products={product} />
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;
